package com.climate.db.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.climate.db.data.VisualSelect;
import com.climate.db.service.ClimateDataService;

@RestController
public class VisualSelectRestController {
    
    @Autowired
    ClimateDataService climateDataService;

    @PostMapping ("addvisual")
    public String addvisual (@RequestBody VisualSelect visualSelect) {
        climateDataService.saveVisualSelect(visualSelect);
        return "OK";
    }

    @GetMapping("visualselect")
    public List<VisualSelect> getVisual(){
        return climateDataService.getVisualSelect(); 
    }
}
