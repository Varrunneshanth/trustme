package com.example.demo.service;

import com.example.demo.model.Company;
import java.util.List;

public interface CompanyService {
    List<Company> getAllCompanies();
    Company getCompanyById(String companyid);
    Company createCompany(Company company);
}
