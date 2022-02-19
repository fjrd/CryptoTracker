package com.example.coinstore.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseCandleDto {

    UUID id;
    String figi;
    BigDecimal max;
    BigDecimal min;
    BigDecimal avg;
    Instant timestamp;
}
