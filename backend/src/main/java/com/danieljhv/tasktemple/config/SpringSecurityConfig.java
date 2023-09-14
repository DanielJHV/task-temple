package com.danieljhv.tasktemple.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

import static org.springframework.security.config.Customizer.withDefaults;
import static org.springframework.security.web.util.matcher.AntPathRequestMatcher.antMatcher;

@Configuration
@EnableMethodSecurity
public class SpringSecurityConfig {

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> {
//                    auth.requestMatchers(antMatcher(HttpMethod.POST, "/api/**")).hasRole("ADMIN");
//                    auth.requestMatchers(antMatcher(HttpMethod.PUT, "/api/**")).hasRole("ADMIN");
//                    auth.requestMatchers(antMatcher(HttpMethod.DELETE, "/api/**")).hasRole("ADMIN");
//                    auth.requestMatchers(antMatcher(HttpMethod.GET, "/api/**")).hasAnyRole("ADMIN", "USER");
//                    auth.requestMatchers(antMatcher(HttpMethod.PATCH, "/api/**")).hasAnyRole("ADMIN", "USER");
                    auth.anyRequest().authenticated();
                }).httpBasic(withDefaults());
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails test = User.builder().username("test").password(passwordEncoder().encode("password")).roles("USER").build();

        UserDetails admin = User.builder().username("admin").password(passwordEncoder().encode("admin")).roles("ADMIN").build();

        return new InMemoryUserDetailsManager(test, admin);
    }
}
