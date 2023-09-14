package com.danieljhv.tasktemple.service;

import com.danieljhv.tasktemple.dto.LoginDto;
import com.danieljhv.tasktemple.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
