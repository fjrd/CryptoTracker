package com.example.coinstore.persistence.repository;

import com.example.coinstore.persistence.model.Customer;
import com.example.coinstore.persistence.model.FavouriteCandle;
import com.example.coinstore.persistence.model.Figi;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface FavouriteCandleRepository extends JpaRepository<FavouriteCandle, UUID> {

    List<FavouriteCandle> getAllByCustomer(Customer customer);

    void deleteByCustomerAndAndFigi(Customer customer, Figi figi);

}
