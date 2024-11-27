package at.jeff.project.service;

import at.jeff.project.model.User;
import at.jeff.project.payload.AuthResponse;
import at.jeff.project.payload.CurrentUserResponse;
import at.jeff.project.payload.LoginRequest;
import at.jeff.project.payload.RegisterRequest;
import at.jeff.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public AuthResponse register(RegisterRequest registerRequest) {
        Optional<User> existingUserByEmail = userRepository.findUserByEmail(registerRequest.getEmail());
        Optional<User> existingUserByUsername = userRepository.findUserByUsername(registerRequest.getUsername());


        if (existingUserByEmail.isPresent() || existingUserByUsername.isPresent()) {
            return new AuthResponse(false, "Benutzername oder E-Mail bereits vorhanden", null, null);
        }

        User newUser = new User();
        newUser.setUsername(registerRequest.getUsername());
        newUser.setEmail(registerRequest.getEmail());
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        User savedUser = userRepository.save(newUser);

        return new AuthResponse(true, "Benutzer erfolgreich registriert", null, savedUser.getId());
    }



    @Override
    public AuthResponse login(LoginRequest loginRequest) {
        Optional<User> user = userRepository.findUserByEmail(loginRequest.getEmail());
        if (user.isEmpty()) {
            return new AuthResponse(false, "Ungültige Anmeldeinformationen", null, null);
        }

        boolean isPasswordMatch = passwordEncoder.matches(loginRequest.getPassword(), user.get().getPassword());
        if (!isPasswordMatch) {
            return new AuthResponse(false, "Ungültige Anmeldeinformationen", null, null);
        }

        // Erfolgreicher Login
        return new AuthResponse(true, "Erfolgreich eingeloggt", null, user.get().getId());

    }


    private String generateToken(User user) {
        return "dummy-token-for-" + user.getUsername();
    }

    @Override
    public CurrentUserResponse getCurrentUser(String userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new RuntimeException("Benutzer nicht gefunden.");
        }

        User user = userOptional.get();
        return new CurrentUserResponse(user.getId(), user.getUsername());
    }

}
