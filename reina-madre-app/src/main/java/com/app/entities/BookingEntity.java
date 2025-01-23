package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="BOOKINGS")
public class BookingEntity {
	
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name="DATE")
	private String date;
	
	@Column(name="TIME")
	private String time;
	
	@ManyToOne
	@JoinColumn(name = "CAT_BOOKING_TYPE_ID")
	private BookingTypeEntity type;
	
	@Column(name="DOCTOR_NAME")
	private String doctorName;
	
	@ManyToOne
	@JoinColumn(name = "CAT_STATUS_ID")
	private StatusEntity status;
	
	@Column(name="ID_USER")
	private Long idUser;
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public BookingTypeEntity getType() {
		return type;
	}

	public void setType(BookingTypeEntity type) {
		this.type = type;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public StatusEntity getStatus() {
		return status;
	}

	public void setStatus(StatusEntity status) {
		this.status = status;
	}

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}
	
	
}
