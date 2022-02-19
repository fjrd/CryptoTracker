package com.example.coinstore.api.dto;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

public class ResponseCandleDto {

    UUID id;
    String figi;
    BigDecimal max;
    BigDecimal min;
    BigDecimal avg;
    Instant timestamp;
}
