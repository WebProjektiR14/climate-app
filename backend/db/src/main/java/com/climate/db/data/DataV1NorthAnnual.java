package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v1_north_annual")
public class DataV1NorthAnnual {

    @Id
    private Integer iddata_v1_north_annual;
    private String date;
    private BigDecimal anomaly;

    public DataV1NorthAnnual() {

    }
    
    public Integer getIddata_v1_north_annual(){
        return this.iddata_v1_north_annual;
    }

    public String getDate(){
        return this.date;
    }

    public BigDecimal getAnomaly(){
        return this.anomaly;
    }

}