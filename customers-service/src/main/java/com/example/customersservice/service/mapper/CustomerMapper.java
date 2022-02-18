package com.example.customersservice.service.mapper;

import com.example.customersservice.api.dto.RequestCustomerSugnupDto;
import com.example.customersservice.api.dto.ResponseCustomerDto;
import com.example.customersservice.persistence.model.Customer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface CustomerMapper {

    Customer signUpDtoToModel(RequestCustomerSugnupDto dto);

    ResponseCustomerDto modelToResponseDto(Customer customer);

}
