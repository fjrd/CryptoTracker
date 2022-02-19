package com.example.coinstore.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "candles")
public class Candle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    @Column(nullable = false)
    String figi;

    @Column(nullable = false)
    BigDecimal max;

    @Column(nullable = false)
    BigDecimal min;

    @Column(nullable = false)
    BigDecimal avg;

    @Column(nullable = false)
    Instant timestamp;

}
