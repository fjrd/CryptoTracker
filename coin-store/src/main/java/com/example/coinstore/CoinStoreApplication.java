package com.example.coinstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@SpringBootApplication
public class CoinStoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(CoinStoreApplication.class, args);
    }

}
