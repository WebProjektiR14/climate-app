package com.climate.db.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.climate.db.data.User;
import com.climate.db.service.ClimateDataService;

@RestController
public class UserRestController {
    
    @Autowired
    ClimateDataService climateDataService;

    @PostMapping ("adduser")
    public String addUser (@RequestBody User user) {
        climateDataService.saveUser(user);
        return "OK";
    }

    @GetMapping("users")
    public List<User> getUsers(){
        return climateDataService.getUsers();
    }

}
