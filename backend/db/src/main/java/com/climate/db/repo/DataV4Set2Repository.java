package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV4Set2;

@Repository
public interface DataV4Set2Repository extends JpaRepository <DataV4Set2, Integer> {
    
}