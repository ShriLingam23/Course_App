package com.example.courseweb.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.courseweb.model.Subject;
import com.example.courseweb.repository.SubjectRepository;

@Service
public class SubjectService {
	
	@Autowired
	private SubjectRepository subjectRepository;
	
	public Subject getSubjectById(String id) {
		Optional<Subject> subject = subjectRepository.findById(id);
		return subject.get();
	}

}
