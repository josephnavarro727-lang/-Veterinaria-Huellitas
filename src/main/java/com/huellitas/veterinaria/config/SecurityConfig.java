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
                                "/api/servicios",
                                "/api/mascotas/**"
                        ).permitAll()

                        .requestMatchers(
                                HttpMethod.POST,
                                "/api/contacto",
                                "/api/registrar",
                                "/api/citas"
                        ).permitAll()

                        .requestMatchers("/admin/**")
                        .hasRole("ADMIN")

                        .requestMatchers("/recepcion/**")
                        .hasAnyRole("ADMIN", "RECEPCIONISTA")

                        .requestMatchers("/veterinario/**")
                        .hasAnyRole("ADMIN", "VETERINARIO")

                        .anyRequest().authenticated()
                )

                .csrf(csrf -> csrf
                        .ignoringRequestMatchers(
                                "/api/contacto",
                                "/api/registrar",
                                "/api/citas"
                        )
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
                        .accessDeniedPage("/acceso-denegado")
                );

        return http.build();
    }
}
