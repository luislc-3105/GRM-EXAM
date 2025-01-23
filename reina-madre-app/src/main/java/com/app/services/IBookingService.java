package com.app.services;

import java.util.List;

import com.app.entities.BookingEntity;

public interface IBookingService {
	
	public List<BookingEntity> findAllByIdUser(Long idUser);
	
	public List<BookingEntity> findAllByIdUserAndStatusNotCanceled(Long idUser);
	
	public List<BookingEntity> findAllByIdUserAndStatusCanceled(Long idUser);
	
	public BookingEntity saveOrUpdate(BookingEntity bookingEntity);

}
