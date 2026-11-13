package com.huellitas.veterinaria.config;
import java.time.Clock;
import java.time.ZoneId;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TiempoConfig {
    @Bean
    public Clock reloj(@Value("${app.time-zone:America/Costa_Rica}") String zona) {
        return Clock.system(ZoneId.of(zona));
    }
}
