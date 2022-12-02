package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV7;

@Repository
public interface DataV7Repository extends JpaRepository <DataV7, Integer> {
    
}