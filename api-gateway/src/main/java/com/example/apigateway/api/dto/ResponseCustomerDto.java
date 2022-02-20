package com.example.apigateway.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class ResponseCustomerDto {

    private UUID id;

    private String login;

    private String password;

    private String name;

    private boolean rememberMe = false;

    private String token;

}
