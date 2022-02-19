package com.example.coinstore.service.mapper;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;
import com.example.coinstore.api.dto.ResponseCandleDto;
import com.example.coinstore.persistence.model.Candle;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CandleMapper {

    Candle messageDtoToEntity(CandleMessageDto dto);
    ResponseCandleDto entityToResponseDto(Candle candle);
    List<ResponseCandleDto> entityListToResponseDtoList(List<Candle> candleList);

}
