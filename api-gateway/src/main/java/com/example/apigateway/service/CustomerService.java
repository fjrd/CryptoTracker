package com.example.apigateway.service;

import com.example.apigateway.api.dto.RequestCustomerSignInDto;
import com.example.apigateway.api.dto.ResponseCustomerDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "customer-service", url = "${application.restUri}")
public interface CustomerService {

    @PostMapping(value = "/api/v1/sign_in", consumes = "application/json")
    ResponseCustomerDto getCustomer(@RequestBody RequestCustomerSignInDto dto);
}
