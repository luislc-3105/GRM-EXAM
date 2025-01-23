package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.StatusEntity;
import com.app.repository.StatusRepository;

@Service
public class StatusService implements IStatusService{
	
	@Autowired
	private StatusRepository statusRepository;
	
	@Override
	public List<StatusEntity> findAll(){
		return statusRepository.findAll();
	}

}
