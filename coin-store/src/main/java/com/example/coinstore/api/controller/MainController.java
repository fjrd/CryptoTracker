package com.example.coinstore.api.controller;

import com.example.coinstore.api.dto.ResponseCandleDto;
import com.example.coinstore.service.CoinService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/candle")
public class MainController {

    private final CoinService service;

    //get 	/api/v1/candle/last_update?figi=btc
    //get	/api/v1/candle/range?figi=btc&startDate=01-01-2021&endDate=02-02-2021
    //
    //get	/api/v1/favourits?userId=UUID							получение списка подписок
    //post	/api/v1/favourits?userId=UUID&figi=btc				подписка
    //delete	/api/v1/favourits?userId=UUID&figi=btc			отписка

    @GetMapping("/last_update")
    public ResponseCandleDto getLastCandleUpdateByFigi(@RequestParam String figi){
        log.info("getLastCandleUpdateByFigi(), figi = {}", figi);
        return service.getLastCandleUpdateByFigi(figi);
    }

    @GetMapping("/range")
    public List<ResponseCandleDto> getCandleListByFigiByRange(@RequestParam String figi,
                                                              @RequestParam @DateTimeFormat(pattern = "dd-MM-yyyy") LocalDate startDate,
                                                              @RequestParam @DateTimeFormat(pattern = "dd-MM-yyyy") LocalDate endDate){
        log.info("getCandleListByFigiByRange(), figi = {}, startDate = {}, endDate = {}", figi, startDate, endDate);
        return service.getCandleListByFigiByRange(figi, startDate, endDate);
    }
}
