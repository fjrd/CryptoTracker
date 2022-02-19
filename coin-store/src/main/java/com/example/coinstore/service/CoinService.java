package com.example.coinstore.service;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;
import com.example.coinstore.api.dto.ResponseCandleDto;

import java.time.LocalDate;
import java.util.List;

public interface CoinService {
    void saveFromKafka(CandleMessageDto dto);

    ResponseCandleDto getLastCandleUpdateByFigi(String figi);

    List<ResponseCandleDto> getCandleListByFigiByRange(String figi, LocalDate startDate, LocalDate endDate);
}
