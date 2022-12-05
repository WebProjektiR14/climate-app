package com.climate.db.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v4_set2")
public class DataV4Set2 {

    @Id
    private Integer iddata_v4_set2;
    private String air_age;
    private String co2;

    public DataV4Set2() {

    }
    
    public Integer getIddata_v4_set2(){
        return this.iddata_v4_set2;
    }

    public String getAirAge(){
        return this.air_age;
    }

    public String getCo2(){
        return this.co2;
    }

}