package com.danieljhv.tasktemple.service;

import com.danieljhv.tasktemple.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);
}
