package com.example.courseweb.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "courses")
public class Course {

	@Id
	String id;
	String name;
	String code;
	String passMark;
	String lectInCharge;
	List<String> subject;
	
	public Course(String name, String code, String passMark, String lectInCharge) {
		this.name = name;
		this.code = code;
		this.passMark = passMark;
		this.lectInCharge = lectInCharge;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getPassMark() {
		return passMark;
	}

	public void setPassMark(String passMark) {
		this.passMark = passMark;
	}

	public String getLectInCharge() {
		return lectInCharge;
	}

	public void setLectInCharge(String lectInCharge) {
		this.lectInCharge = lectInCharge;
	}

	public List<String> getSubject() {
		return subject;
	}

	public void setSubjects(List<String> subject) {
		this.subject = subject;
	}
	
	
}
