package com.example.courseweb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.courseweb.model.Course;

@Repository
public interface CourseRepository extends MongoRepository<Course,String> {
}
