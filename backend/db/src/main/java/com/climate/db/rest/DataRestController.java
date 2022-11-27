package com.climate.db.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.climate.db.data.User;
import com.climate.db.data.DataV1GlobalAnnual;
import com.climate.db.service.ClimateDataService;

@RestController
public class DataRestController {
    @Autowired
    ClimateDataService climateDataService;

    @GetMapping("datav1ga")
    public List<DataV1GlobalAnnual> geData_v1_global_annuals(){
        return climateDataService.getDataV1GA();
    }
}
