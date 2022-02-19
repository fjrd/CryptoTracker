package com.example.coinstore.api.controller;

import com.example.coinstore.service.CoinService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/coin")
public class MainController {

    private final CoinService service;

    @GetMapping("/test")
    public String test(){
        return "test";
    }
}
