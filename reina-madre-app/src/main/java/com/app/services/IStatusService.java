package com.app.services;

import java.util.List;

import com.app.entities.StatusEntity;

public interface IStatusService {
	
	public List<StatusEntity> findAll();

}
