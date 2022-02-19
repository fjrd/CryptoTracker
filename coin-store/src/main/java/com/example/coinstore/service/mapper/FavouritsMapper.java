package com.example.coinstore.service.mapper;

import com.example.coinstore.api.dto.ResponseFavouriteCandle;
import com.example.coinstore.persistence.model.FavouriteCandle;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface FavouritsMapper {

    @Mapping(source = "customer.id", target = "userId")
    @Mapping(source = "figi.figi", target = "figi")
    List<ResponseFavouriteCandle> entityToResponseList(List<FavouriteCandle> entity);

    @Mapping(source = "customer.id", target = "userId")
    @Mapping(source = "figi.figi", target = "figi")
    ResponseFavouriteCandle entityToResponse(FavouriteCandle entity);
}
