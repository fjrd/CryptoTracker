package com.example.apigateway.util;

import com.example.apigateway.api.dto.ResponseCustomerDto;
import com.example.apigateway.exception.JwtAuthenticationException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Base64;
import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {

    @Value("${application.secret}")
    private String secretKey;
    @Value("${application.expiration}")
    private long validityInMilliseconds;

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(ResponseCustomerDto dto) {
        log.info("createToken(), dto = {}", dto);
        Claims claims = Jwts.claims().setSubject(dto.getLogin()).setId(dto.getId().toString());
        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds * 1000);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public boolean validateToken(String token) throws  JwtAuthenticationException {
        try {
            Jws<Claims> claimsJws = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token.replace("Bearer ", ""));
            return !claimsJws.getBody().getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            throw new JwtAuthenticationException("Jwt token is expired or invalid", HttpStatus.UNAUTHORIZED);
        }
    }
}