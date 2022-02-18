package com.example.customersservice.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseCustomerDto {

    private String login;

    private String password;

    private String name;

    private boolean rememberMe = false;

}
