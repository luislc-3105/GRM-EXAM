package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.entities.UserEntity;

public interface IUserService {
	
	public List<UserEntity> findAllUsers();
	
	public Optional<UserEntity> findUserById(Long id);
	
	public UserEntity saveOrUpdate(UserEntity userEntity);

}
