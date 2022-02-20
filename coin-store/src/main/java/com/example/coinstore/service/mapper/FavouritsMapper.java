package com.example.coinstore.service.mapper;

import com.example.coinstore.api.dto.FavouriteCandleDto;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface FavouritsMapper {

    @Mapping(source = "customer.id", target = "userId")
    @Mapping(source = "figi.figi", target = "figi")
    List<FavouriteCandleDto> entityToResponseList(List<com.example.coinstore.persistence.model.FavouriteCandle> entity);

    @Mapping(source = "customer.id", target = "userId")
    @Mapping(source = "figi.figi", target = "figi")
    FavouriteCandleDto entityToResponse(com.example.coinstore.persistence.model.FavouriteCandle entity);
}
