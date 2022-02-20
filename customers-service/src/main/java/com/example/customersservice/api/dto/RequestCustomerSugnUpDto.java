package com.example.customersservice.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
public class RequestCustomerSugnUpDto {

    @NotBlank
    private String login;

    @Size(min = 8)
    @NotBlank
    private String password;

    @Size(max = 50)
    @NotBlank
    private String name;
}
