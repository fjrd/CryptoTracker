package com.example.apigateway.api.controller;

import com.example.apigateway.api.dto.RequestCustomerSignInDto;
import com.example.apigateway.api.dto.RequestCustomerSignUpDto;
import com.example.apigateway.api.dto.ResponseCustomerDto;
import com.example.apigateway.service.CustomerService;
import com.example.apigateway.util.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/auth/")
public class AuthenticationController {

    private final JwtTokenProvider tokenProvider;
    private final CustomerService customerService;

    @PostMapping("sign_in")
    public ResponseEntity<?> signIn(@RequestBody @Valid RequestCustomerSignInDto requestDto) {
        log.info("signId(), requestDto = {}", requestDto);
        ResponseCustomerDto responseCustomerDto = customerService.signIn(requestDto);
        String token = tokenProvider.createToken(responseCustomerDto);
        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + token)
                .body(responseCustomerDto.toBuilder().token(token).build());
    }

    @PostMapping("sign_up")
    public ResponseEntity<?> signUp(@RequestBody @Valid RequestCustomerSignUpDto requestDto) {
        log.info("signUp(), requestDto = {}", requestDto);
        ResponseCustomerDto responseCustomerDto = customerService.signUp(requestDto);
        String token = tokenProvider.createToken(responseCustomerDto);
        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + token)
                .body(responseCustomerDto.toBuilder().token(token).build());
    }
}
