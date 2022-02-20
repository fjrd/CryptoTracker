package com.example.apigateway.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestCustomerSignUpDto {

    @NotBlank
    private String login;

    @NotBlank
    private String password;

    @NotBlank
    private String name;
}
