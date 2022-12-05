package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV9;

@Repository
public interface DataV9Repository extends JpaRepository <DataV9, Integer> {
    
}