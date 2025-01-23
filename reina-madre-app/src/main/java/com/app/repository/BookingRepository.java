package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.BookingEntity;

@Repository
public interface BookingRepository extends JpaRepository<BookingEntity, Long> {
	
	List<BookingEntity> findAllByIdUser(Long idUser);
	
	@Query("SELECT booking FROM BookingEntity as booking WHERE booking.idUser = :idUser AND booking.status.id != 5")
	List<BookingEntity> findAllByIdUserAndStatusNotCanceled(Long idUser);
	
	@Query("SELECT booking FROM BookingEntity as booking WHERE booking.idUser = :idUser AND booking.status.id = 5")
	List<BookingEntity> findAllByIdUserAndStatusCanceled(Long idUser);

}
