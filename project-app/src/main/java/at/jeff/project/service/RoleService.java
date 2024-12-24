package at.jeff.project.service;

import at.jeff.project.model.user.Role;
import java.util.List;

public interface RoleService {

    Role save(Role role);

    List<Role> findAllRoles(); // Korrektur des Methodennamens
}
