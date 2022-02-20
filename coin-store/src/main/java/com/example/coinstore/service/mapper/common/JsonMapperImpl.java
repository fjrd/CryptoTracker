package com.example.coinstore.service.mapper.common;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class JsonMapperImpl implements JsonMapper {

    private final ObjectMapper objectMapper;

    public JsonMapperImpl(ObjectMapper objectMapper) {
        objectMapper.registerModule(new JavaTimeModule());
        this.objectMapper = objectMapper;
    }

    public Object mapStringToObject(String message, Class type) throws JsonProcessingException {
        return objectMapper.readValue(message, type);
    }
}
