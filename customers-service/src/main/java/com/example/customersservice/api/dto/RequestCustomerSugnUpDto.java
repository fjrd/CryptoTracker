package com.example.customersservice.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
public class RequestCustomerSugnUpDto {

    @NotBlank
    private String login;

    @NotBlank
    private String password;

    @NotBlank
    private String name;
}
