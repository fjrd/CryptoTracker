package com.example.coinstore.service;

import com.example.coinstore.api.consumers.dto.CandleMessageDto;
import com.example.coinstore.api.dto.ResponseCandleDto;
import com.example.coinstore.persistence.model.Candle;
import com.example.coinstore.persistence.repository.CandleRepository;
import com.example.coinstore.service.mapper.CandleMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CandleServiceImpl implements CandleService {

    private final CandleRepository repository;
    private final CandleMapper mapper;

    @Override
    public void saveFromKafka(CandleMessageDto dto) {
        log.info("saveFromKafka() dto = {}", dto);
        Candle candle = mapper.messageDtoToEntity(dto);
        repository.save(candle);
    }

    @Override
    public ResponseCandleDto getLastCandleUpdateByFigi(String figi) {
        log.info("getLastCandleUpdateByFigi(), figi = {}", figi);
        List<Candle> candleList = repository.getAllByFigiOrderByTimestampDesc(figi);
        Candle candle = candleList.stream().findFirst().orElseThrow(() -> new EntityNotFoundException("No candles for this figi =" + figi));
        return mapper.entityToResponseDto(candle);
    }

    @Override
    public List<ResponseCandleDto> getCandleListByFigiByRange(String figi, LocalDate startDate, LocalDate endDate) {
        log.info("getCandleListByFigiByRange(), figi = {}, startDate = {}, endDate = {}", figi, startDate, endDate);
        List<Candle> candleList = repository.getAllByFigiAndTimestampBetweenOrderByTimestampDesc(
                figi,
                startDate.atStartOfDay(ZoneId.systemDefault()).toInstant(),
                endDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        List<ResponseCandleDto> responseList = mapper.entityListToResponseDtoList(candleList);
        return responseList;
    }

}
