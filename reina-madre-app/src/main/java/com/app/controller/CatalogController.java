package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.BookingTypeEntity;
import com.app.entities.StatusEntity;
import com.app.services.BookingTypeService;
import com.app.services.StatusService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api-reina-madre")
public class CatalogController {
	
	@Autowired
	private StatusService statusService;
	
	@Autowired
	private BookingTypeService bookingService;
	
	@GetMapping("/catalog/status")
	public List<StatusEntity> getAllStatus(){
		return statusService.findAll();
	}
	
	@GetMapping("/catalog/types")
	public List<BookingTypeEntity> getAllBookingTypes(){
		return bookingService.findAll();
	}
}
