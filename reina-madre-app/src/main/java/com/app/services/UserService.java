package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.UserEntity;
import com.app.repository.UserRepository;

@Service
public class UserService implements IUserService {
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<UserEntity> findAllUsers(){
		return userRepository.findAll();
	}
	
	@Override
	public Optional<UserEntity> findUserById(Long id){
		return userRepository.findById(id);
	}
	
	@Override
    public UserEntity saveOrUpdate(UserEntity userEntity) {
		return userRepository.save(userEntity);
    }

}
