package com.app.services;

import java.util.List;

import com.app.entities.BookingTypeEntity;

public interface IBookingTypeService {
	
	public List<BookingTypeEntity> findAll();

}
