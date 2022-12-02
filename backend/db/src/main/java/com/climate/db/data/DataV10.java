package com.climate.db.data;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="data_v10")
public class DataV10 {

    @Id
    private Integer iddata_v10;
    private Integer years_ago;
    private String event;

    public DataV10() {

    }
    
    public Integer getIddata_v10(){
        return this.iddata_v10;
    }


    public Integer getYear(){
        return this.years_ago;
    }

    public String getEvent(){
        return this.event;
    }
}