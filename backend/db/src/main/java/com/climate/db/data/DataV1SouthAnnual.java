package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v1_south_annual")
public class DataV1SouthAnnual {

    @Id
    private Integer iddata_v1_south_annual;
    private String date;
    private BigDecimal anomaly;

    public DataV1SouthAnnual() {

    }
    
    public Integer getIddata_v1_south_annual(){
        return this.iddata_v1_south_annual;
    }

    public String getDate(){
        return this.date;
    }

    public BigDecimal getAnomaly(){
        return this.anomaly;
    }

}