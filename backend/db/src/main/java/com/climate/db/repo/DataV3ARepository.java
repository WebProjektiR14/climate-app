package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV3Annual;

@Repository
public interface DataV3ARepository extends JpaRepository <DataV3Annual, Integer> {
    
}