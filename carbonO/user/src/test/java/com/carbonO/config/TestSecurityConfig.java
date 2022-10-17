package com.carbonO.config;

import org.junit.jupiter.api.Order;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@TestConfiguration
@Order(1)
public class TestSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable().authorizeRequests().anyRequest().permitAll();

    }
}
