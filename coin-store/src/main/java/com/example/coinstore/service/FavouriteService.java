package com.example.coinstore.service;

import com.example.coinstore.api.dto.FavouriteCandleDto;

import java.util.List;
import java.util.UUID;

public interface FavouriteService {
    List<FavouriteCandleDto> getFavouriteListByUser(UUID userId);

    FavouriteCandleDto create(UUID userId, String figi);

    void delete(UUID userId, String figi);
}
