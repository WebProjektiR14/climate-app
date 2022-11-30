package com.climate.db.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV1NorthMonthly;

@Repository
public interface DataV1NMRepository extends JpaRepository <DataV1NorthMonthly, Integer> {
    
}