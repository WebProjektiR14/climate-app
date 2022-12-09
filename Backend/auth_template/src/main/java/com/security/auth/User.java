package com.security.auth;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    public String fullname;
    public String username;
    public String password;

    public User(String fullname, String username, String pw) {
        this.fullname = fullname;
        this.username = username;
        this.password = pw;
    }

}
 

