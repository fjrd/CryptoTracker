package com.example.customersservice.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
public class RequestCustomerSugnUpDto {

    @NotBlank
    private String login;

    @NotBlank
    @Min(8)
    private String password;

    @NotBlank
    @Max(50)
    private String name;
}
