package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;

@Document(collection = "Reviews")
public class Review {

    @Id
    private String id;
    private String reviewid;
    private String userid;
    private String companyid;
    private int rating;
    private String comment;
    private Date created_at;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getReviewid() {
		return reviewid;
	}
	public void setReviewid(String reviewid) {
		this.reviewid = reviewid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getCompanyid() {
		return companyid;
	}
	public void setCompanyid(String companyid) {
		this.companyid = companyid;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Date getCreated_at() {
		return created_at;
	}
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

    // getters and setters
}