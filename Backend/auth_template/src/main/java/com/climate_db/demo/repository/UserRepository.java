package com.climate_db.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.climate_db.demo.entity.User;

@RepositoryRestResource(path = "/users")
public interface UserRepository extends JpaRepository<User, String> {
}