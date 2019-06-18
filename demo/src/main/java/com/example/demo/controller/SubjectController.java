package com.example.demo.controller;

import java.util.Iterator;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Subject;
import com.example.demo.repository.SubjectRepository;

@RestController
public class SubjectController {
	
	@Autowired
	SubjectRepository subjectRepository;
	
	@CrossOrigin(origins="http://localhost:3000")
	@RequestMapping(method=RequestMethod.POST,value="/calculate/")
	public double calculateFee(@RequestBody String[] subs) {
		
		double tot = 0.0;
		
		for(String sub : subs) {
			Optional<Subject> subject = subjectRepository.findById(sub);
			tot = tot + subject.get().getAmount();
		}
		
		System.out.println(tot);
		return tot;
	}

}
