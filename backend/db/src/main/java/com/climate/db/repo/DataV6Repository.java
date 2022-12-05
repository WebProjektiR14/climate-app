package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV6;

@Repository
public interface DataV6Repository extends JpaRepository <DataV6, Integer> {
    
}