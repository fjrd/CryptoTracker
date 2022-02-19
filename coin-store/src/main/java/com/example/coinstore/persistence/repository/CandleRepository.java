package com.example.coinstore.persistence.repository;

import com.example.coinstore.persistence.model.Candle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CandleRepository extends JpaRepository<Candle, UUID> {
}
