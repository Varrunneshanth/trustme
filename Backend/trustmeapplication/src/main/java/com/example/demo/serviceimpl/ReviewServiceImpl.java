package com.example.demo.serviceimpl;

import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Optional<Review> getReviewById(String id) {
        return reviewRepository.findById(id);
    }

    @Override
    public Review saveReview(Review review) {
        review.setCreatedAt(LocalDateTime.now());
        review.setUpdatedAt(LocalDateTime.now());
        return reviewRepository.save(review);
    }

    @Override
    public Review updateReview(String id, Review review) {
        if (reviewRepository.existsById(id)) {
            review.setId(id);
            review.setUpdatedAt(LocalDateTime.now());
            return reviewRepository.save(review);
        }
        return null; // Or throw an exception if needed
    }

    @Override
    public void deleteReview(String id) {
        reviewRepository.deleteById(id);
    }

    @Override
    public List<Review> getReviewsByCompanyId(String companyid) {
        return reviewRepository.findByCompanyid(companyid);
    }
}
