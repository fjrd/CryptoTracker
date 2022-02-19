package com.example.coinstore.api.controller;

import com.example.coinstore.api.dto.ResponseCandleDto;
import com.example.coinstore.api.dto.ResponseFavouriteCandle;
import com.example.coinstore.service.CandleService;
import com.example.coinstore.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Slf4j
@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/candle")
public class MainController {

    private final CandleService candleService;
    private final FavouriteService favouriteService;

    @GetMapping("/last_update")
    public ResponseCandleDto getLastCandleUpdateByFigi(@RequestParam String figi){
        log.info("getLastCandleUpdateByFigi(), figi = {}", figi);
        return candleService.getLastCandleUpdateByFigi(figi);
    }

    @GetMapping("/range")
    public List<ResponseCandleDto> getCandleListByFigiByRange(@RequestParam String figi,
                                                              @RequestParam @DateTimeFormat(pattern = "dd-MM-yyyy") LocalDate startDate,
                                                              @RequestParam @DateTimeFormat(pattern = "dd-MM-yyyy") LocalDate endDate){
        log.info("getCandleListByFigiByRange(), figi = {}, startDate = {}, endDate = {}", figi, startDate, endDate);
        return candleService.getCandleListByFigiByRange(figi, startDate, endDate);
    }

    @GetMapping("/favourites")
    public List<ResponseFavouriteCandle> getFavouritListByUser(@RequestParam UUID userId){
        log.info("getFavouritListByUser(), userId = {}", userId);
        return favouriteService.getFavouriteListByUser(userId);
    }


    @PostMapping("/favourites")
    public ResponseFavouriteCandle createFavourites(@RequestBody UUID userId, @RequestBody String figi){
        log.info("createFavourites(), userId = {}, figi = {}", userId, figi);
        return favouriteService.create(userId, figi);
    }

    @DeleteMapping("/favourites")
    public ResponseEntity<?> deleteFavourites(@RequestBody UUID userId, @RequestBody String figi){
        log.info("createFavourites(), userId = {}, figi = {}", userId, figi);
        favouriteService.delete(userId, figi);
        return ResponseEntity.ok().build();
    }
}
