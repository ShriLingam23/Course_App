package com.example.courseweb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.courseweb.model.Subject;

@Repository
public interface SubjectRepository extends MongoRepository<Subject, String> {

}
