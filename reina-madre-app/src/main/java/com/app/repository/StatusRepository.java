package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.StatusEntity;

@Repository
public interface StatusRepository extends JpaRepository<StatusEntity, String>{

}