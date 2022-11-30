package com.climate.db.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id

    //generoidaan id luodessa:
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer iduser;
    private String username;
    private String password;

    public User() {

    }

    public User (Integer iduser, String username, String password) {
        this.iduser=iduser;
        this.username=username;
        this.password=password;
    }

    public Integer getIduser(){
        return this.iduser;
    }

    public void setIduser(Integer iduser){
        this.iduser=iduser;
    }

    public String getUsername(){
        return this.username;
    }

    public void setUsername(String username){
        this.username=username;
    }
    public String getPassword(){
        return this.password;
    }
    public void setPassword(String password){
        this.password=password;
    }
}
