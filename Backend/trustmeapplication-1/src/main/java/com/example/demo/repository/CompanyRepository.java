package com.example.demo.repository;

import com.example.demo.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
    List<Company> findByCategoryid(String categoryid);
    Company findByCompanyid(String companyId); // Updated to match property name
}