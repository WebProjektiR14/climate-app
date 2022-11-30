package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV1GlobalMonthly;

@Repository
public interface DataV1GMRepository extends JpaRepository <DataV1GlobalMonthly, Integer> {
    
}