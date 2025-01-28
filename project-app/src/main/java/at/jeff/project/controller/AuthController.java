package at.jeff.project.controller;

import at.jeff.project.payload.AuthResponse;
import at.jeff.project.payload.CurrentUserResponse;
import at.jeff.project.payload.LoginRequest;
import at.jeff.project.payload.RegisterRequest;
import at.jeff.project.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping(value = "/register", produces = "application/json")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        AuthResponse response = authService.register(registerRequest);
        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/login", produces = "application/json")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        AuthResponse response = authService.login(loginRequest);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "/current-user", produces = "application/json")
    public CurrentUserResponse getCurrentUser(@RequestHeader("user-id") String userId) {
        return authService.getCurrentUser(userId);
    }
}
