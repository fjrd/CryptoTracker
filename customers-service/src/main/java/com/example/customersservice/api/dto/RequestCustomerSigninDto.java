package com.example.customersservice.api.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
public class RequestCustomerSigninDto {

    @NotBlank
    private String login;

    @NotBlank
    private String password;

    @NotNull
    private boolean rememberMe;
}
