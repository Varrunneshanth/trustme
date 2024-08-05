package com.example.demo.service;

import com.example.demo.model.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<Review> getAllReviews();
    Optional<Review> getReviewById(String id);
    Review saveReview(Review review);
    Review updateReview(String id, Review review);
    void deleteReview(String id);
    List<Review> getReviewsByCompanyId(String companyid);
}
