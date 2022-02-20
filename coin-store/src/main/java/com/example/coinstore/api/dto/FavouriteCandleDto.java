package com.example.coinstore.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FavouriteCandleDto {

    private UUID userId;

    private String figi;
}
