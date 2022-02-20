package com.example.coinstore.service;

import com.example.coinstore.api.dto.FavouriteCandleDto;
import com.example.coinstore.persistence.model.Customer;
import com.example.coinstore.persistence.model.FavouriteCandle;
import com.example.coinstore.persistence.model.Figi;
import com.example.coinstore.persistence.repository.CustomerRepository;
import com.example.coinstore.persistence.repository.FavouriteCandleRepository;
import com.example.coinstore.persistence.repository.FigiRepository;
import com.example.coinstore.service.mapper.FavouritsMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class FavouriteServiceImpl implements FavouriteService {

    private final FavouriteCandleRepository favouriteCandleRepository;
    private final CustomerRepository customerRepository;
    private final FigiRepository figiRepository;
    private final FavouritsMapper mapper;

    @Override
    public List<FavouriteCandleDto> getFavouriteListByUser(UUID userId) {
        Customer customer = customerRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("No such customer with id = " + userId));
        List<com.example.coinstore.persistence.model.FavouriteCandle> favouriteCandleList = favouriteCandleRepository.getAllByCustomer(customer);
        return mapper.entityToResponseList(favouriteCandleList);
    }

    @Override
    public FavouriteCandleDto create(UUID userId, String figiName) {
        Customer customer = customerRepository.findById(userId)
                .orElseGet(() -> customerRepository.save(new Customer(userId)));
        Figi figi = figiRepository.findFigiByFigi(figiName)
                .orElseGet(() -> figiRepository.save(Figi.builder().figi(figiName).build()));
        FavouriteCandle favouriteCandle = FavouriteCandle.builder().customer(customer).figi(figi).build();
        FavouriteCandle saved = favouriteCandleRepository.save(favouriteCandle);
        return mapper.entityToResponse(saved);
    }

    @Transactional
    @Override
    public void delete(UUID userId, String figiName) {
        Customer customer = customerRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("No such customer with id = " + userId));
        Figi figi = figiRepository.findFigiByFigi(figiName)
                .orElseThrow(() -> new EntityNotFoundException("No such figi with name = " + figiName));
        favouriteCandleRepository.deleteByCustomerAndAndFigi(customer, figi);
    }
}
