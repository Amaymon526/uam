package at.jeff.project.service;


import at.jeff.project.payload.AuthResponse;
import at.jeff.project.payload.CurrentUserResponse;
import at.jeff.project.payload.LoginRequest;
import at.jeff.project.payload.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest registerRequest);

    AuthResponse login(LoginRequest loginRequest);

    CurrentUserResponse getCurrentUser(String userId);
}
