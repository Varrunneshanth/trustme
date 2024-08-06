package com.example.demo.service;



import com.example.demo.model.Category;
import java.util.List;

public interface CategoryService {
    Category createCategory(Category category);
    Category getId(String id);
    Category getCategoryById(String categoryid);
    List<Category> getAllCategories();
    Category updateCategory(String id, Category category);
    void deleteCategory(String id);
}
