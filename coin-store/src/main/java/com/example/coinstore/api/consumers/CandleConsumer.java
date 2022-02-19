package com.example.coinstore.api.consumers;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;
import com.example.coinstore.service.CoinService;
import com.example.coinstore.service.mapper.common.JsonMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class CandleConsumer {

    private final JsonMapper jsonMapper;
    private final CoinService coinService;

    @KafkaListener(topics = "#{'${kafka.candle-stream-topic}'}")
    public void consume(String message){
        log.info("consume(), message = {}", message);
        try {

            CandleMessageDto dto = (CandleMessageDto) jsonMapper.mapStringToObject(message, CandleMessageDto.class);
            coinService.saveFromKafka(dto);

        } catch (JsonProcessingException e) {
            log.error("Couldn't parse string to dto, " + e.getMessage());
        } catch (Exception e){
            log.error("Something went wrong " + e.getMessage());
        }
    }
}
