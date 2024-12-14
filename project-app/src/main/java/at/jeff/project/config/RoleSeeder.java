package at.jeff.project.config;

import at.jeff.project.model.external.Role;
import at.jeff.project.repository.RoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Component
public class RoleSeeder {

    private final RoleRepository roleRepository;

    @Value("${roles.check.enabled:true}")
    private boolean rolesCheckEnabled;

    public RoleSeeder(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @PostConstruct
    public void seedRoles() {
        if (!rolesCheckEnabled) {
            log.warn("Role Seeder disabled!");
            return;
        }

        log.info( "\n\n" +"////////////////// ROLE_SEEDER //////////////////" + "\n\n\n");

        createRoleIfNotExists("admin", "Administrator mit allen Berechtigungen", 0);
        createRoleIfNotExists("registeredUser", "Registrierter Benutzer mit Basisrechten", 1);
        createRoleIfNotExists("user", "Standardbenutzer mit limitierten Rechten", 2);

        log.info( "\n\n\n" +"//////////////////////////////////////////////////"+ "\n\n\n");

    }

    public void createRoleIfNotExists(String roleName, String description, int level) {
        Optional<Role> role = roleRepository.findByName(roleName);

        if (role.isEmpty()) {
            Role newRole = new Role();
            newRole.setId(UUID.randomUUID().toString());
            newRole.setName(roleName);
            newRole.setDescription(description);
            newRole.setPermissionsLevel(level);
            roleRepository.save(newRole);
            log.info("Rolle erstellt: " + roleName + " (Level: " + level + ")");
        } else {
            log.warn("Rolle existiert bereits: " + roleName);
        }

    }

}
