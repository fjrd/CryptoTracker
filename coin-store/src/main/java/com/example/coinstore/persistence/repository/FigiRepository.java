package com.example.coinstore.persistence.repository;

import com.example.coinstore.persistence.model.Figi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface FigiRepository extends JpaRepository<Figi, UUID> {
    Optional<Figi> findFigiByFigi(String figi);
}
