package com.climate.db.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climate.db.data.User;
import com.climate.db.data.DataV1GlobalAnnual;

import com.climate.db.repo.DataV1GARepository;
import com.climate.db.repo.UserRepository;

@Service
public class ClimateDataService {

    @Autowired
    UserRepository userRepository;

    public void saveUser (User user){
        userRepository.save (user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Autowired
    DataV1GARepository dataV1GARepository;

    public List<DataV1GlobalAnnual> getDataV1GA(){
        return dataV1GARepository.findAll();
    }
}
