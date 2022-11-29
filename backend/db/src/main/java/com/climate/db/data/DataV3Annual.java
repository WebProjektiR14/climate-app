package com.climate.db.data;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v3_annual")
public class DataV3Annual {

    @Id
    private Integer iddata_v3_annual;
    private String year;
    private BigDecimal co2;

    public DataV3Annual() {

    }
    
    public Integer getIddata_v3_annual(){
        return this.iddata_v3_annual;
    }

    public String getYear(){
        return this.year;
    }

    public BigDecimal getCo2(){
        return this.co2;
    }

}