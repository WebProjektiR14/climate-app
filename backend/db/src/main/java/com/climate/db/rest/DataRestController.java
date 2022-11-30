package com.climate.db.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
import com.climate.db.data.DataV5;
import com.climate.db.service.ClimateDataService;

@RestController
public class DataRestController {
    @Autowired
    ClimateDataService climateDataService;

    @CrossOrigin
    @GetMapping("datav1ga")
    public List<DataV1GlobalAnnual> getData_v1_global_annual(){
        return climateDataService.getDataV1GA();
    }

    @CrossOrigin
    @GetMapping("datav1gm")
    public List<DataV1GlobalMonthly> getData_v1_global_monthly(){
        return climateDataService.getDataV1GM();
    }

    @CrossOrigin
    @GetMapping("datav1na")
    public List<DataV1NorthAnnual> getData_v1_north_annual(){
        return climateDataService.getDataV1NA();
    }

    @CrossOrigin
    @GetMapping("datav1nm")
    public List<DataV1NorthMonthly> getData_v1_north_monthly(){
        return climateDataService.getDataV1NM();
    }

    @CrossOrigin
    @GetMapping("datav1sa")
    public List<DataV1SouthAnnual> getData_v1_south_annual(){
        return climateDataService.getDataV1SA();
    }

    @CrossOrigin
    @GetMapping("datav1sm")
    public List<DataV1SouthMonthly> getData_v1_south_monthly(){
        return climateDataService.getDataV1SM();
    }

    @CrossOrigin
    @GetMapping("datav2")
    public List<DataV2> getData_v2(){
        return climateDataService.getDataV2();
    }

    @CrossOrigin
    @GetMapping("datav3a")
    public List<DataV3Annual> getData_v3_annual(){
        return climateDataService.getDataV3A();

    }

    @CrossOrigin
    @GetMapping("datav3m")
    public List<DataV3Monthly> getData_v3_monthly(){
        return climateDataService.getDataV3M();
    }

    @CrossOrigin
    @GetMapping("datav4s1")
    public List<DataV4Set1> getData_v4_set1(){
        return climateDataService.getDataV4Set1();
    }

    @CrossOrigin
    @GetMapping("datav5")
    public List<DataV5> getData_v5(){
        return climateDataService.getDataV5();
    }

}