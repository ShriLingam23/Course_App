package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="subjects")
public class Subject {

	@Id
	private String _id;
	private String name;
	private String description;
	private Double amount;
	
	public Subject() {
		super();
	}

	public Subject(String _id, String name, String description, Double amount) {
		super();
		this._id = _id;
		this.name = name;
		this.description = description;
		this.amount = amount;
	}
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	
	
	
}
