package com.example.apigateway.exception;

public class NotValidException extends RuntimeException{
    public NotValidException(String message) {
        super(message);
    }
}
