package com.example.coinstore.api.consumers.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CandleMessageDto {

    String figi;
    BigDecimal max;
    BigDecimal min;
    BigDecimal avg;
    Instant timestamp;
}
