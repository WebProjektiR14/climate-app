package com.climate.db.data;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v6")
public class DataV6 {

    @Id
    private Integer iddata_v6;
    private String gas_age;
    private BigDecimal co2;

    public DataV6() {

    }
    
    public Integer getIddata_v6(){
        return this.iddata_v6;
    }


    public String getGasAge(){
        return this.gas_age;
    }

    public BigDecimal getCo2(){
        return this.co2;
    }
}