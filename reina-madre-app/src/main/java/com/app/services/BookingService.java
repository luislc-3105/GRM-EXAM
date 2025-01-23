package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.BookingEntity;
import com.app.repository.BookingRepository;

@Service
public class BookingService implements IBookingService{
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Override
	public List<BookingEntity> findAllByIdUser(Long idUser){
		return bookingRepository.findAllByIdUser(idUser);
	}
	
	@Override
	public List<BookingEntity> findAllByIdUserAndStatusNotCanceled(Long idUser){
		return bookingRepository.findAllByIdUserAndStatusNotCanceled(idUser);
	}
	
	@Override
	public List<BookingEntity> findAllByIdUserAndStatusCanceled(Long idUser){
		return bookingRepository.findAllByIdUserAndStatusCanceled(idUser);
	}
	
	@Override
	public BookingEntity saveOrUpdate(BookingEntity bookingEntity) {
		return bookingRepository.save(bookingEntity);
	}

}
