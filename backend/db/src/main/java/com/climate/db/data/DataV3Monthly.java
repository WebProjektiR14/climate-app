package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v3_monthly")
public class DataV3Monthly {

    @Id
    private Integer iddata_v3_monthly;
    private String year;
    private String month;
    private BigDecimal co2;

    public DataV3Monthly() {

    }
    
    public Integer getIddata_v3_monthly(){
        return this.iddata_v3_monthly;
    }

    public String getYear(){
        return this.year;
    }

    public String getMonth(){
        return this.month;
    }

    public BigDecimal getCo2(){
        return this.co2;
    }

}