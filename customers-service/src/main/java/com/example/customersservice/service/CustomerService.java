package com.example.customersservice.service;

import com.example.customersservice.api.dto.RequestCustomerSigninDto;
import com.example.customersservice.api.dto.RequestCustomerSugnupDto;
import com.example.customersservice.api.dto.ResponseCustomerDto;

public interface CustomerService {

    ResponseCustomerDto signIn(RequestCustomerSigninDto requestCustomerSigninDto);
    ResponseCustomerDto signUp(RequestCustomerSugnupDto dto);
}
