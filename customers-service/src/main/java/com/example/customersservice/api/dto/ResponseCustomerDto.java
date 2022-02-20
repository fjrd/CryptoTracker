package com.example.customersservice.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class ResponseCustomerDto {

    private UUID id;

    private String login;

    private String password;

    private String name;

    private boolean rememberMe = false;

}
