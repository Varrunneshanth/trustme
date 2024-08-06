package com.example.demo.controller;

import com.example.demo.model.Review;
import com.example.demo.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/getcompany/{companyId}")
    public ResponseEntity<List<Review>> getReviewsByCompanyId(@PathVariable String companyId) {
    	
        List<Review> reviews = reviewService.getReviewsByCompany(companyId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping("/add/{companyId}")
    public ResponseEntity<Review> addReview(@PathVariable String companyId, @RequestBody Review review) {
        review.setCompanyid(companyId);
        Review newReview = reviewService.addReview(review);
        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
        
        
        

    }
}