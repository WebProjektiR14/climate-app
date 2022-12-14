package com.climate.db.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climate.db.data.VisualSelect;
import com.climate.db.data.User;
import com.climate.db.data.DataV10;
import com.climate.db.data.DataV1GlobalAnnual;
import com.climate.db.data.DataV1GlobalMonthly;
import com.climate.db.data.DataV1NorthAnnual;
import com.climate.db.data.DataV1NorthMonthly;
import com.climate.db.data.DataV1SouthAnnual;
import com.climate.db.data.DataV1SouthMonthly;
import com.climate.db.data.DataV2;
import com.climate.db.data.DataV3Annual;
import com.climate.db.data.DataV3Monthly;
import com.climate.db.data.DataV4Set1;
import com.climate.db.data.DataV4Set2;
import com.climate.db.data.DataV4Set3;
import com.climate.db.data.DataV5;
import com.climate.db.data.DataV6;
import com.climate.db.data.DataV7;
import com.climate.db.data.DataV9;
import com.climate.db.repo.DataV1GARepository;
import com.climate.db.repo.DataV1GMRepository;
import com.climate.db.repo.DataV1NARepository;
import com.climate.db.repo.DataV1NMRepository;
import com.climate.db.repo.DataV1SARepository;
import com.climate.db.repo.DataV1SMRepository;
import com.climate.db.repo.DataV2Repository;
import com.climate.db.repo.DataV3ARepository;
import com.climate.db.repo.DataV3MRepository;
import com.climate.db.repo.DataV4Set1Repository;
import com.climate.db.repo.DataV4Set2Repository;
import com.climate.db.repo.DataV4Set3Repository;
import com.climate.db.repo.DataV5Repository;
import com.climate.db.repo.DataV6Repository;
import com.climate.db.repo.DataV7Repository;
import com.climate.db.repo.DataV10Repository;
import com.climate.db.repo.DataV9Repository;

import com.climate.db.repo.UserRepository;
import com.climate.db.repo.VisualSelectRepository;

@Service
public class ClimateDataService {

    @Autowired

    VisualSelectRepository visualSelectRepository;

    public void saveVisualSelect (VisualSelect visualSelect){
        visualSelectRepository.save (visualSelect);
    }

    public List<VisualSelect> getVisualSelect() {
        return visualSelectRepository.findAll();
    }

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

    @Autowired
    DataV2Repository dataV2Repository;
    public List<DataV2> getDataV2() {
        return dataV2Repository.findAll();
    }

    @Autowired
    DataV3ARepository dataV3ARepository;
    public List<DataV3Annual> getDataV3A() {
        return dataV3ARepository.findAll();
    }

    @Autowired
    DataV3MRepository dataV3MRepository;
    public List<DataV3Monthly> getDataV3M() {
        return dataV3MRepository.findAll();
    }

    @Autowired
    DataV4Set1Repository dataV4Set1Repository;
    public List<DataV4Set1> getDataV4Set1() {
        return dataV4Set1Repository.findAll();
    }

    @Autowired
    DataV4Set2Repository dataV4Set2Repository;
    public List<DataV4Set2> getDataV4Set2() {
        return dataV4Set2Repository.findAll();
    }

    @Autowired
    DataV4Set3Repository dataV4Set3Repository;
    public List<DataV4Set3> getDataV4Set3() {
        return dataV4Set3Repository.findAll();
    }

    @Autowired
    DataV5Repository dataV5Repository;
    public List<DataV5> getDataV5() {
        return dataV5Repository.findAll();
    }

    @Autowired
    DataV6Repository dataV6Repository;
    public List<DataV6> getDataV6() {
        return dataV6Repository.findAll();
    }

    @Autowired
    DataV7Repository dataV7Repository;
    public List<DataV7> getDataV7() {
        return dataV7Repository.findAll();
    }

    @Autowired
    DataV10Repository dataV10Repository;
    public List<DataV10> getDataV10() {
        return dataV10Repository.findAll();
    }

    @Autowired
    DataV9Repository dataV9Repository;
    public List<DataV9> getDataV9() {
        return dataV9Repository.findAll();
    }
}
