package com.climate.db.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v4_set1")
public class DataV4Set1 {

    @Id
    private Integer iddata_v4_set1;
    private String ice_age;
    private String air_age;
    private String co2;

    public DataV4Set1() {

    }
    
    public Integer getIddata_v4_set1(){
        return this.iddata_v4_set1;
    }

    public String getIceAge(){
        return this.ice_age;
    }

    public String getAirAge(){
        return this.air_age;
    }

    public String getCo2(){
        return this.co2;
    }

}