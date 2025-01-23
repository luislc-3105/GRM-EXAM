package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.BookingEntity;
import com.app.entities.UserEntity;
import com.app.services.BookingService;
import com.app.services.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api-reina-madre")
public class ApiController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/users")
	public List<UserEntity> getAllUsers(){
		return userService.findAllUsers();
	}
	
	@GetMapping("/users/detail")
	public Optional<UserEntity> getUser(@RequestParam Long id){
		return userService.findUserById(id);
	}
	
	@PostMapping("/users")
    public ResponseEntity<?> saveOrUpdateUser(@RequestBody UserEntity user){
        try {
        	UserEntity userEntity = userService.saveOrUpdate(user);
           return new ResponseEntity<UserEntity>(userEntity, HttpStatus.OK);
        }
        catch (Exception e){
        	return new ResponseEntity<String>("BAD REQUEST",HttpStatus.BAD_REQUEST);
        }
    }
	
//	@GetMapping("/bookings")
//	public List<BookingEntity> getAllBookingsByIdUser(@RequestParam Long idUser){
//		return bookingService.findAllByIdUser(idUser);
//	}
	
	
	@GetMapping("/bookings")
	public List<BookingEntity> getAllBookingsByIdUserAndStatusNotCanceled(@RequestParam Long idUser){
		return bookingService.findAllByIdUserAndStatusNotCanceled(idUser);
	}
	
	@GetMapping("/bookings-cancel")
	public List<BookingEntity> getAllBookingsByIdUserAndStatusCanceled(@RequestParam Long idUser){
		return bookingService.findAllByIdUserAndStatusCanceled(idUser);
	}
	
	@PostMapping("/bookings")
    public ResponseEntity<?> saveOrUpdateBooking(@RequestBody BookingEntity booking){
        try {
        	BookingEntity bookingEntity = bookingService.saveOrUpdate(booking);
           return new ResponseEntity<BookingEntity>(bookingEntity, HttpStatus.OK);
        }
        catch (Exception e){
        	return new ResponseEntity<String>("BAD REQUEST",HttpStatus.BAD_REQUEST);
        }
    }

}
