package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV5;

@Repository
public interface DataV5Repository extends JpaRepository <DataV5, Integer> {
    
}