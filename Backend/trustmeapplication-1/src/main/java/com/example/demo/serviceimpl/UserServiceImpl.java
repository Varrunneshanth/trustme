package com.example.demo.serviceimpl;



import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    @Override
    public User register(User user) {
        if (userRepository.findByEmail(user.getEmail()) == null) {
            user.setCreated_at(new Date());
            user.setUpdated_at(new Date());
            return userRepository.save(user);
        }
        return null;
    }
}

