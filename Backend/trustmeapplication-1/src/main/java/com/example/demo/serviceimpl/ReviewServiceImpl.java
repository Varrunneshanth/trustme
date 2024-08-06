package com.example.demo.serviceimpl;
import com.example.demo.model.Review;
import com.example.demo.repository.ReviewRepository;
import com.example.demo.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<Review> getReviewsByCompany(String companyId) {
        return reviewRepository.findByCompanyid(companyId);
    }

    @Override
    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }
}