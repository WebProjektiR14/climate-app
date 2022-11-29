package com.climate.db.data;

import java.text.DecimalFormat;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v3_annual")
public class DataV3Annual {

    @Id
    private Integer iddata_v3_annual;
    private String year;
    private DecimalFormat anomaly;

    public DataV3Annual() {

    }
    
    public Integer getIddata_v3_annual(){
        return this.iddata_v3_annual;
    }

    public String getDate(){
        return this.year;
    }

    public DecimalFormat getAnomaly(){
        return this.anomaly;
    }

}