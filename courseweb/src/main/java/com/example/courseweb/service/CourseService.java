package com.example.courseweb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.courseweb.model.Course;
import com.example.courseweb.repository.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepository;
	
	public Course getCourseById(String id) {
		System.out.println(id);
		Optional<Course> course = courseRepository.findById(id);
		System.out.println(course+"   "+course.get());
		return course.get();
	}
	
	public List<Course> getCourses() {
		List<Course> courses = courseRepository.findAll();
		return courses;
	}
}
