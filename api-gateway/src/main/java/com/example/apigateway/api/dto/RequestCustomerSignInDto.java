package com.example.apigateway.api.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestCustomerSignInDto {

    @NotBlank
    private String login;

    @NotBlank
    private String password;

    @NotNull
    private boolean rememberMe;
}
