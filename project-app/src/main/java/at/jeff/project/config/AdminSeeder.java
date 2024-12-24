package at.jeff.project.config;

import at.jeff.project.model.user.User;
import at.jeff.project.model.user.Role;
import at.jeff.project.repository.UserRepository;
import at.jeff.project.repository.RoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Collections;
import java.util.Optional;

@Slf4j
@Component
public class AdminSeeder {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Value("${adminUser.check.enabled:true}")
    private boolean userRolesCheckEnabled;

    public AdminSeeder(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @PostConstruct
    public void seedAdmin() {
        if (!userRolesCheckEnabled) {
            return;
        }

        Optional<Role> adminRole = roleRepository.findByName("admin");
        if (adminRole.isEmpty()) {
            log.error("Die Rolle 'admin' existiert nicht. Bitte sicherstellen, dass die RoleSeeder korrekt funktioniert.");
            return;
        }

        log.info( "\n\n" +"////////////////// ADMIN_SEEDER //////////////////" + "\n\n\n");

        createAdminUserIfNotExists("admin", "admin", "123", adminRole.get());

        log.info( "\n\n" +"///////////////////////////////////////////////////" + "\n\n\n");
    }

    private void createAdminUserIfNotExists(String username, String email, String password, Role adminRole) {
        Optional<User> existingUser = userRepository.findUserByUsername(username);
        if (existingUser.isEmpty()) {
            User adminUser = new User();
            adminUser.setUsername(username);
            adminUser.setEmail(email);
            adminUser.setPassword(password);
            adminUser.setRole(Collections.singletonList(adminRole));

            userRepository.save(adminUser);
            log.info("Admin-Benutzer wurde erstellt: Benutzername '{}', E-Mail '{}'", username, email);
        } else {
            log.info("Der Admin-Benutzer '{}' existiert bereits.", username);
        }
    }
}