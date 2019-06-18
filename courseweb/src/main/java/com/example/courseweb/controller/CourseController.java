package com.example.courseweb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.courseweb.model.Course;
import com.example.courseweb.model.Subject;
import com.example.courseweb.service.CourseService;
import com.example.courseweb.service.SubjectService;

@RestController
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	@Autowired
	private SubjectService subjectService;

	@RequestMapping(method= RequestMethod.GET , value="/calculate/{id}")
	public double calcCourseFee(@PathVariable("id") String id) {
		Course course = courseService.getCourseById(id);
		List<String> subjects = course.getSubject();
		System.out.println(subjects);
		double courseFee = 0;
		for(String subjectId : subjects){
			Subject subject = subjectService.getSubjectById(subjectId);
			courseFee = courseFee + subject.getAmount();
		}
		return courseFee;
	}
}
