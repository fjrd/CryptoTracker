package com.example.customersservice.service;

import com.example.customersservice.api.dto.RequestCustomerSignInDto;
import com.example.customersservice.api.dto.RequestCustomerSugnUpDto;
import com.example.customersservice.api.dto.ResponseCustomerDto;

public interface CustomersService {

    ResponseCustomerDto signIn(RequestCustomerSignInDto requestCustomerSigninDto);
    ResponseCustomerDto signUp(RequestCustomerSugnUpDto dto);
}
