package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV1NorthAnnual;

@Repository
public interface DataV1NARepository extends JpaRepository <DataV1NorthAnnual, Integer> {
    
}