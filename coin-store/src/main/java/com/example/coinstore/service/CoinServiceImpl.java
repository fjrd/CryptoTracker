package com.example.coinstore.service;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;
import com.example.coinstore.persistence.model.Candle;
import com.example.coinstore.persistence.repository.CandleRepository;
import com.example.coinstore.service.mapper.CandleMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class CoinServiceImpl implements CoinService{

    private final CandleRepository repository;
    private final CandleMapper mapper;

    @Override
    public void saveFromKafka(CandleMessageDto dto) {
        log.info("saveFromKafka() dto = {}", dto);
        Candle candle = mapper.messageDtoToEntity(dto);
        repository.save(candle);
    }

}
