package com.climate.db.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV1SouthAnnual;

@Repository
public interface DataV1SARepository extends JpaRepository <DataV1SouthAnnual, Integer> {
    
}
