package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.User;

@Repository
public interface UserRepository extends JpaRepository <User, Integer> {
    
}

