package com.example.customersservice.service;

import com.example.customersservice.api.dto.RequestCustomerSignInDto;
import com.example.customersservice.api.dto.RequestCustomerSugnUpDto;
import com.example.customersservice.api.dto.ResponseCustomerDto;
import com.example.customersservice.persistence.model.Customer;
import com.example.customersservice.persistence.repository.CustomerRepository;
import com.example.customersservice.service.mapper.CustomerMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Slf4j
@Service
@RequiredArgsConstructor
public class CustomersServiceImpl implements CustomersService {

    private final CustomerMapper mapper;
    private final CustomerRepository repository;
    private final PasswordEncoder bCryptPasswordEncoder;

    @Override
    public ResponseCustomerDto signIn(RequestCustomerSignInDto requestDto) {
        log.info("signIn(), requestDto = {}", requestDto);
        Customer customer = repository.findCustomerByLogin(requestDto.getLogin())
                .orElseThrow(() -> new EntityNotFoundException("No such customer with login = " + requestDto.getLogin()));
        if(!bCryptPasswordEncoder.matches(requestDto.getPassword(), customer.getPassword()))
            throw new BadCredentialsException("Login or password is wrong");
        System.out.println(customer);
        ResponseCustomerDto responseCustomerDto = mapper.modelToResponseDto(customer);
        System.out.println(responseCustomerDto);
//        return mapper.modelToResponseDto(customer);
        return responseCustomerDto;
    }

    @Override
    public ResponseCustomerDto signUp(RequestCustomerSugnUpDto dto) {
        log.info("signUp(), dto = {}", dto);
        Customer customer = mapper.signUpDtoToModel(dto);
        customer.setPassword(bCryptPasswordEncoder.encode(customer.getPassword()));
        customer = repository.save(customer);
        return mapper.modelToResponseDto(customer);
    }
}