package com.example.coinstore.service;

import com.example.coinstore.api.dto.ResponseFavouriteCandle;

import java.util.List;
import java.util.UUID;

public interface FavouriteService {
    List<ResponseFavouriteCandle> getFavouriteListByUser(UUID userId);

    ResponseFavouriteCandle create(UUID userId, String figi);

    void delete(UUID userId, String figi);
}
