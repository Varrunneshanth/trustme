package com.example.demo.serviceimpl;

import com.example.demo.model.Company;
import com.example.demo.repository.CompanyRepository;
import com.example.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company getCompanyById(String companyId) {
        return companyRepository.findById(companyId).orElse(null);
    }

    @Override
    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public List<Company> getCompaniesByCategoryid(String categoryId) {
        return companyRepository.findByCategoryid(categoryId);
    }

    @Override
    public Company getCompanyByCompanyid(String companyId) {
        return companyRepository.findByCompanyid(companyId); // Updated method name
    }
}