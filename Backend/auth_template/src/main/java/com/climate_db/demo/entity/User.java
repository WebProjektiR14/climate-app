package com.climate_db.demo.entity;



import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;


@Entity
@Data
public class User {

    @Id
    private String email;
    private String password;
    private String id;


    public String getEmail() {
        return email;
    }

    public void setUsername(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getid() {
        return id;
    }

    public void setid(String id) {
        this.id = id;
    }

   

    @Override
    public String toString() {
        return "User{" + "email='" + email + '\'' + ", password='" + password + '\'' + ", name='" + id + '\''
                 + '\'' + '}';
    }
}
