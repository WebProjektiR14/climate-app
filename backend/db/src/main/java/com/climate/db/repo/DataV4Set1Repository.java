package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV4Set1;

@Repository
public interface DataV4Set1Repository extends JpaRepository <DataV4Set1, Integer> {
    
}