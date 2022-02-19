package com.example.coinstore.persistence.repository;

import com.example.coinstore.persistence.model.Candle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public interface CandleRepository extends JpaRepository<Candle, UUID> {

    List<Candle> getAllByFigiOrderByTimestampDesc(String figi);
    List<Candle> getAllByFigiAndTimestampBetweenOrderByTimestampDesc(String figi, Instant startDate, Instant endDate);

}
