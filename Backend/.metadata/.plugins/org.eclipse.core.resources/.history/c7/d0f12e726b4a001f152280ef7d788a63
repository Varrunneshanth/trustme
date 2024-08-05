package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.service.CompanyService;

@Controller
public class HomeController {
    @Autowired
    private CompanyService companyService;

    @GetMapping("/home")
    public String showHomePage(Model model) {
        model.addAttribute("companies", companyService.getAllCompanies());
        return "home";
    }
}
