package com.climate.db.data;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v7")
public class DataV7 {

    @Id
    private Integer iddata_v7;
    private Integer year;
    private BigDecimal temp;

    public DataV7() {

    }
    
    public Integer getIddata_v7(){
        return this.iddata_v7;
    }


    public Integer getYear(){
        return this.year;
    }

    public BigDecimal getTemp(){
        return this.temp;
    }
}