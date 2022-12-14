package com.climate.db.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table (name="visual_select")
public class VisualSelect {

    @Id

    //generoidaan id luodessa:
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idvisual;

    public VisualSelect() {

    }

    public VisualSelect(Integer idvisual) {
        this.idvisual=idvisual;
    }

    public Integer getIdvisual(){
        return this.idvisual;
    }

    public void setIdvisual(Integer idvisual){
        this.idvisual=idvisual;
    }
}

