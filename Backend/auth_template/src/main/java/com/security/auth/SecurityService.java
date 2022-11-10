package com.security.auth;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;


@Service
public class SecurityService {

    @Autowired
    PersonRepository repo;

    @Autowired
    MyPasswordEncoder myEncoder;

    @Value("${jwt.secret}")
    private String jwtkey;

    /**
     * Register new user or update existing one
     * @param uname
     * @param pw
     * @return
     */

    public User register(String uname, String pw){
        User u = new User(uname, myEncoder.encode(pw));
        repo.save(u);
        return u;
    }

    /**
     * Login user. Return token or null if not found or wrong password.
     * @param uname
     * @param pw
     * @return
     */

    public String login(String uname, String pw){

        User u = repo.findById(uname).orElse(null);

        if(u == null || !myEncoder.matches(pw, u.password)){
            return null;
        }
        
        Algorithm alg = Algorithm.HMAC256(jwtkey);
        return JWT.create().withSubject(u.username).sign(alg);
    }

    public String validateJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtkey);
        JWTVerifier verifier = JWT.require(alg).build();

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
        
        }

        return null;
    }

}