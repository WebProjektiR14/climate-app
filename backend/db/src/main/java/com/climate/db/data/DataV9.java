package com.climate.db.data;


import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v9")
public class DataV9 {

    @Id
    private Integer iddata_v9;
    private BigDecimal precentage;
    private String sub_sector;

    public DataV9() {

    }
    
    public Integer getIddata_v9(){
        return this.iddata_v9;
    }


    public BigDecimal getPrecentage(){
        return this.precentage;
    }

    public String getSector(){
        return this.sub_sector;
    }
}