package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v1_global_annual")
public class DataV1GlobalAnnual {

    @Id
    private Integer iddata_v1_global_annual;
    private String date;
    private BigDecimal anomaly;

    public DataV1GlobalAnnual() {

    }
    
    public Integer getIddata_v1_global_annual(){
        return this.iddata_v1_global_annual;
    }

    public String getDate(){
        return this.date;
    }

    public BigDecimal getAnomaly(){
        return this.anomaly;
    }

}
