package com.huellitas.veterinaria.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http
                .authorizeHttpRequests(auth -> auth

                        .requestMatchers(
                                "/",
                                "/servicios",
                                "/registro",
                                "/citas",
                                "/contacto",
                                "/login",
                                "/acceso-denegado",
                                "/error",
                                "/favicon.ico",
                                "/*.css",
                                "/*.js",
                                "/*.png",
                                "/*.jpg",
                                "/*.avif",
                                "/*.ico",
                                "/css/**",
                                "/js/**",
                                "/images/**"
                        ).permitAll()

                        .requestMatchers(
                                HttpMethod.GET,
                                "/api/servicios"
                        ).permitAll()

                        .requestMatchers(
                                HttpMethod.POST,
                                "/api/contacto",
                                "/api/registrar"
                        ).permitAll()

                        .requestMatchers("/api/mascotas/**", "/api/veterinarios", "/api/citas")
                        .hasAnyRole("ADMIN", "RECEPCIONISTA")

                        .requestMatchers("/admin/**")
                        .hasRole("ADMIN")

                        .requestMatchers("/recepcion/**")
                        .hasAnyRole("ADMIN", "RECEPCIONISTA")

                        .requestMatchers("/veterinario/**")
                        .hasAnyRole("ADMIN", "VETERINARIO")

                        .anyRequest().authenticated()
                )

                .formLogin(form -> form
                        .loginPage("/login")
                        .loginProcessingUrl("/login")
                        .usernameParameter("username")
                        .passwordParameter("password")
                        .defaultSuccessUrl("/panel", true)
                        .failureUrl("/login?error")
                        .permitAll()
                )

                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login?logout")
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID")
                        .permitAll()
                )

                .exceptionHandling(ex -> ex
                        .authenticationEntryPoint((request, response, exception) -> {
                            if (request.getRequestURI().startsWith(request.getContextPath() + "/api/")) {
                                response.setStatus(401);
                                response.setContentType("application/json;charset=UTF-8");
                                response.getWriter().write("{\"mensaje\":\"Inicia sesión para continuar.\"}");
                            } else {
                                new org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint("/login")
                                        .commence(request, response, exception);
                            }
                        })
                        .accessDeniedHandler((request, response, exception) -> {
                            if (request.getRequestURI().startsWith(request.getContextPath() + "/api/")) {
                                response.setStatus(403);
                                response.setContentType("application/json;charset=UTF-8");
                                response.getWriter().write("{\"mensaje\":\"No tienes permiso o la sesión del formulario venció. Recarga la página.\"}");
                            } else {
                                var handler = new org.springframework.security.web.access.AccessDeniedHandlerImpl();
                                handler.setErrorPage("/acceso-denegado");
                                handler.handle(request, response, exception);
                            }
                        })
                );

        return http.build();
    }
}
