package com.example.demo.repository;
//
import com.example.demo.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


import com.example.demo.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, String> {
    List<Review> findByCompanyid(String companyid);
}