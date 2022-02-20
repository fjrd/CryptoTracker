package com.example.coinstore.service.mapper;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;
import com.example.coinstore.api.dto.ResponseCandleDto;
import com.example.coinstore.persistence.model.Candle;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;

import java.time.Instant;
import java.util.List;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface CandleMapper {

    default Candle messageDtoToEntity(CandleMessageDto dto){
        return Candle.builder()
                .figi(dto.getFigi())
                .avg(dto.getAvg())
                .max(dto.getMax())
                .min(dto.getMin())
                .timestamp(Instant.ofEpochMilli(dto.getTimestamp().longValue()))
                .build();
    }
    ResponseCandleDto entityToResponseDto(Candle candle);
    List<ResponseCandleDto> entityListToResponseDtoList(List<Candle> candleList);

}
