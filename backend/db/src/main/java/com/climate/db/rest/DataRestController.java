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
import com.climate.db.service.ClimateDataService;

@RestController
public class DataRestController {
    @Autowired
    ClimateDataService climateDataService;

    @CrossOrigin
    @GetMapping("datav1ga")
    public List<DataV1GlobalAnnual> geData_v1_global_annual(){
        return climateDataService.getDataV1GA();
    }

    @CrossOrigin
    @GetMapping("datav1gm")
    public List<DataV1GlobalMonthly> geData_v1_global_monthly(){
        return climateDataService.getDataV1GM();
    }

    @CrossOrigin
    @GetMapping("datav1na")
    public List<DataV1NorthAnnual> geData_v1_north_annual(){
        return climateDataService.getDataV1NA();
    }

    @CrossOrigin
    @GetMapping("datav1nm")
    public List<DataV1NorthMonthly> geData_v1_north_monthly(){
        return climateDataService.getDataV1NM();
    }

    @CrossOrigin
    @GetMapping("datav1sa")
    public List<DataV1SouthAnnual> geData_v1_south_annual(){
        return climateDataService.getDataV1SA();
    }

    @CrossOrigin
    @GetMapping("datav1sm")
    public List<DataV1SouthMonthly> geData_v1_south_monthly(){
        return climateDataService.getDataV1SM();
    }
}
