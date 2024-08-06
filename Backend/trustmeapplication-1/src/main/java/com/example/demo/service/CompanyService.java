package com.example.demo.service;

import com.example.demo.model.Company;

import java.util.List;

public interface CompanyService {
    List<Company> getAllCompanies();
    Company getCompanyById(String companyId);
    Company createCompany(Company company);
    List<Company> getCompaniesByCategoryid(String categoryId);
    Company getCompanyByCompanyid(String companyId); // Updated method name
}