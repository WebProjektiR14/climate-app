package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV10;

@Repository
public interface DataV10Repository extends JpaRepository <DataV10, Integer> {
    
}