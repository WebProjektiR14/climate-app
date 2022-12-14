package com.climate.db.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climate.db.data.VisualSelect;

@Repository
public interface VisualSelectRepository extends JpaRepository <VisualSelect, Integer> {
    
}
