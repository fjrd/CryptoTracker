package com.example.coinstore.service.mapper;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;
import com.example.coinstore.persistence.model.Candle;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CandleMapper {

    Candle messageDtoToEntity(CandleMessageDto dto);

}
