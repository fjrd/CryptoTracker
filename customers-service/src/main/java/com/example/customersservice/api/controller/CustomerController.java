package com.example.customersservice.api.controller;

import com.example.customersservice.api.dto.RequestCustomerSigninDto;
import com.example.customersservice.api.dto.RequestCustomerSugnupDto;
import com.example.customersservice.api.dto.ResponseCustomerDto;
import com.example.customersservice.service.CustomerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {

    private final CustomerService service;

    @PostMapping("signin")
    public ResponseCustomerDto authenticate(@RequestBody @Valid RequestCustomerSigninDto requestCustomerSigninDto) {
        return service.signIn(requestCustomerSigninDto);
    }

    @PostMapping("signup")
    public ResponseCustomerDto create(@RequestBody @Valid RequestCustomerSugnupDto dto) {
        return service.signUp(dto);
    }
}