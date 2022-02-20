package com.example.customersservice.persistence.repository;

import com.example.customersservice.persistence.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {

    Optional<Customer> findCustomerByLogin(String login);
    Optional<Customer> getCustomerByLogin(String login);
}
