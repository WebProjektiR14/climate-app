package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV1GlobalAnnual;

@Repository
public interface DataV1GARepository extends JpaRepository <DataV1GlobalAnnual, Integer> {
    
}