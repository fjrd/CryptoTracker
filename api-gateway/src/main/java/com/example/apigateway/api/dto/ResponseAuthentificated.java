package com.example.apigateway.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseAuthentificated {

    private UUID id;
    private String name;
    private String password;
    private boolean rememberMe;
    private String jwtToken;

}
