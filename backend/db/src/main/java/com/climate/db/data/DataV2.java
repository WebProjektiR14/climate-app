package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v2")
public class DataV2 {

    @Id
    private Integer iddata_v2;
    private String year;
    private BigDecimal anomaly;

    public DataV2() {

    }
    
    public Integer getIddata_v2(){
        return this.iddata_v2;
    }

    public String getDate(){
        return this.year;
    }

    public BigDecimal getAnomaly(){
        return this.anomaly;
    }

}