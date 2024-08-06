package com.example.demo.controller;

import com.example.demo.model.Company;
import com.example.demo.service.CompanyService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/companies")
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        Company createdCompany = companyService.createCompany(company);
        return ResponseEntity.ok(createdCompany);
    }

    @GetMapping("/companies/{categoryId}")
    public ResponseEntity<List<Company>> getCompaniesByCategoryId(@PathVariable String categoryId) {
        List<Company> companies = companyService.getCompaniesByCategoryid(categoryId);
        if (companies != null && !companies.isEmpty()) {
            return ResponseEntity.ok(companies);
        }
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/companies")
    public ResponseEntity<List<Company>> getAllCompanies() {
        return ResponseEntity.ok(companyService.getAllCompanies());
    }

    @GetMapping("/companies/details/{companyId}")
    public ResponseEntity<Company> getCompanyByCompanyId(@PathVariable String companyId) {
        Company company = companyService.getCompanyByCompanyid(companyId);
        if (company != null) {
            return ResponseEntity.ok(company);
        }
        return ResponseEntity.notFound().build();
    }
}