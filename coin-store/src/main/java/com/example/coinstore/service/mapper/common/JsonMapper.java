package com.example.coinstore.service.mapper.common;

import com.fasterxml.jackson.core.JsonProcessingException;

public interface JsonMapper {
    Object mapStringToObject(String message, Class type) throws JsonProcessingException;
}
