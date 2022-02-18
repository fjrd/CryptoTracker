package com.example.customersservice.api.controller;

import com.example.customersservice.api.dto.RequestCustomerSigninDto;
import com.example.customersservice.api.dto.RequestCustomerSugnupDto;
import com.example.customersservice.api.dto.ResponseCustomerDto;
import com.example.customersservice.service.CustomersService;
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

    private final CustomersService service;

    @PostMapping("sign_in")
    public ResponseCustomerDto signIn(@RequestBody @Valid RequestCustomerSigninDto dto) {
        log.info("signIn(), dto = {}", dto);
        return service.signIn(dto);
    }

    @PostMapping("sign_up")
    public ResponseCustomerDto signUo(@RequestBody @Valid RequestCustomerSugnupDto dto) {
        log.info("signUp(), dto = {}", dto);
        return service.signUp(dto);
    }
}