package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CAT_BOOKING_TYPE")
public class BookingTypeEntity {
	@Id
	@Column(name = "CAT_BOOKING_TYPE_ID")
	private String id;
	
	@Column(name = "DESCRIPTION")
	private String description;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
