package com.example.coinstore.service;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;

public interface CoinService {
    void saveFromKafka(CandleMessageDto dto);
}
