package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepository;



import com.example.demo.model.Review;
import java.util.List;

public interface ReviewService {
    List<Review> getReviewsByCompany(String companyId);
    Review addReview(Review review);
}