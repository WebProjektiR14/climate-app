package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v1_south_monthly")
public class DataV1SouthMonthly {

    @Id
    private Integer iddata_v1_south_monthly;
    private String date;
    private BigDecimal anomaly;

    public DataV1SouthMonthly() {

    }
    
    public Integer getIddata_v1_south_monthly(){
        return this.iddata_v1_south_monthly;
    }

    public String getDate(){
        return this.date;
    }

    public BigDecimal getAnomaly(){
        return this.anomaly;
    }

}