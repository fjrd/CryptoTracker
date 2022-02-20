package com.example.apigateway.config;

import com.example.apigateway.exception.CustomErrorDecoder;
import feign.codec.Decoder;
import feign.codec.Encoder;
import feign.codec.ErrorDecoder;
import feign.jackson.JacksonDecoder;
import feign.jackson.JacksonEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfiguration {
    @Bean
    public Decoder decoder() {
        return new JacksonDecoder();
    }

    @Bean
    public Encoder encoder() {
        return new JacksonEncoder();
    }

    @Bean
    public ErrorDecoder errorDecoder() {
        return new CustomErrorDecoder();
    }

}
