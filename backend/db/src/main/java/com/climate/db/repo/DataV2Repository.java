package com.climate.db.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV2;

@Repository
public interface DataV2Repository extends JpaRepository <DataV2, Integer> {
    
}