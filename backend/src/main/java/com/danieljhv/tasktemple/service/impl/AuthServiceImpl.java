package com.danieljhv.tasktemple.service.impl;

import com.danieljhv.tasktemple.dto.RegisterDto;
import com.danieljhv.tasktemple.entity.Role;
import com.danieljhv.tasktemple.entity.User;
import com.danieljhv.tasktemple.exception.TaskAPIException;
import com.danieljhv.tasktemple.repository.RoleRepository;
import com.danieljhv.tasktemple.repository.UserRepository;
import com.danieljhv.tasktemple.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    @Override
    public String register(RegisterDto registerDto) {
        // Check if the username exists

        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new TaskAPIException(HttpStatus.BAD_REQUEST, "Username already exists");
        }

        // Check if the email exists

        if (userRepository.existsByEmail(registerDto.getEmail())) {
            throw new TaskAPIException(HttpStatus.BAD_REQUEST, "Email already exists");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);
        userRepository.save(user);

        return "User registered successfully!";
    }

    public AuthServiceImpl(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }
}
