package com.climate.db.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climate.db.data.User;
import com.climate.db.data.DataV1GlobalAnnual;
import com.climate.db.data.DataV1GlobalMonthly;
import com.climate.db.data.DataV1NorthAnnual;
import com.climate.db.data.DataV1NorthMonthly;
import com.climate.db.data.DataV1SouthAnnual;
import com.climate.db.data.DataV1SouthMonthly;
import com.climate.db.repo.DataV1GARepository;
import com.climate.db.repo.DataV1GMRepository;
import com.climate.db.repo.DataV1NARepository;
import com.climate.db.repo.DataV1NMRepository;
import com.climate.db.repo.DataV1SARepository;
import com.climate.db.repo.DataV1SMRepository;
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

    @Autowired
    DataV1GMRepository dataV1GMRepository;
    public List<DataV1GlobalMonthly> getDataV1GM() {
        return dataV1GMRepository.findAll();
    }

    @Autowired
    DataV1NARepository dataV1NARepository;
    public List<DataV1NorthAnnual> getDataV1NA() {
        return dataV1NARepository.findAll();
    }

    @Autowired
    DataV1NMRepository dataV1NMRepository;
    public List<DataV1NorthMonthly> getDataV1NM() {
        return dataV1NMRepository.findAll();
    }

    @Autowired
    DataV1SARepository dataV1SARepository;
    public List<DataV1SouthAnnual> getDataV1SA() {
        return dataV1SARepository.findAll();
    }

    @Autowired
    DataV1SMRepository dataV1SMRepository;
    public List<DataV1SouthMonthly> getDataV1SM() {
        return dataV1SMRepository.findAll();
    }
}
