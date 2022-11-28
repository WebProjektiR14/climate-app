package com.climate.db.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.DataV1SouthMonthly;

@Repository
public interface DataV1SMRepository extends JpaRepository <DataV1SouthMonthly, Integer> {
    
}
