package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV3Monthly;

@Repository
public interface DataV3MRepository extends JpaRepository <DataV3Monthly, Integer> {
    
}