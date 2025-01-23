package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.BookingTypeEntity;
import com.app.repository.BookingTypeRepository;

@Service
public class BookingTypeService implements IBookingTypeService{
	
	@Autowired
	private BookingTypeRepository bookingTypeRepository;
	
	@Override
	public List<BookingTypeEntity> findAll(){
		return bookingTypeRepository.findAll();
	}

}
