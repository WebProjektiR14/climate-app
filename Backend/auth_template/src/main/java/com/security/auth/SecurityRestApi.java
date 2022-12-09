package com.security.auth;

import java.util.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class SecurityRestApi {

    @Autowired
    SecurityService secService;
    PersonRepository repo;

    @PostMapping("register")
    public ResponseEntity<String> register(
        @RequestParam String fullname,
        @RequestParam String uname, 
        @RequestParam String pw)
        {
            User u = secService.register(fullname,uname, pw);

            HttpHeaders headers =  new HttpHeaders();
            headers.setContentType(MediaType.TEXT_PLAIN);
            return new ResponseEntity<>(u.fullname, HttpStatus.OK);
        }

    @PostMapping("login")
    public ResponseEntity<String> login(
        @RequestParam String uname, 
        @RequestParam String pw)
        {
            String token = secService.login(uname, pw);

            if(token == null){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            HttpHeaders headers =  new HttpHeaders();
            headers.setContentType(MediaType.TEXT_PLAIN);
            return new ResponseEntity<>(token, HttpStatus.OK);
            
        }

    /**
     * @param bearer
     * @return
     */
    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization")String bearer){
        
        if(bearer.startsWith("Bearer")){
            String token = bearer.split(" ")[1];
            String username = secService.validateJwt(token);
            if(username!=null){
                HttpHeaders headers =  new HttpHeaders();
                headers.setContentType(MediaType.TEXT_PLAIN);
                return new ResponseEntity<>("Private data for "+username, headers, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("loginbasic")
    public ResponseEntity<String> loginBasic(@RequestHeader("Authorization") String basicAuth)
        {

            String token = null;
            //"Basic uname:pw"
            if(basicAuth.startsWith("Basic")){
                String credentials = basicAuth.split(" ")[1];
                String[] user = new String( Base64.getDecoder().decode(credentials)).split(":");
                token = secService.login(user[0], user[1]);
            }

        
            if(token == null){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            HttpHeaders headers =  new HttpHeaders();
            headers.setContentType(MediaType.TEXT_PLAIN);
            return new ResponseEntity<>(token, headers, HttpStatus.OK);
        }

    /* 
    @GetMapping("/users")
    public List<User> getUsers(){
        return repo.findAll();
    }
    */
    @DeleteMapping("/user/{id}")
    public String deleteById(@PathVariable("id") Long id) {
            return "Delete by id called";
    }
    
    @DeleteMapping("/user")
    public String deleteByName(@RequestParam(value = "username") String uname) {
        return "Delete by username called";
    }


}
