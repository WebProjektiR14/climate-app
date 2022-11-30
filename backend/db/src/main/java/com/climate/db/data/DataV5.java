package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v5")
public class DataV5 {

    @Id
    private Integer iddata_v5;
    private String air_age;
    private BigDecimal co2;

    public DataV5() {

    }
    
    public Integer getIddata_v5(){
        return this.iddata_v5;
    }


    public String getAirAge(){
        return this.air_age;
    }

    public BigDecimal getCo2(){
        return this.co2;
    }
}