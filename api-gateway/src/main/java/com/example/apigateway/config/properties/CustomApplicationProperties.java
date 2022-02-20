package com.example.apigateway.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "application")
public class CustomApplicationProperties {

    private String coinStoreHost;
    private String customersHost;
    private String secret;
    private Long expiration;

}
