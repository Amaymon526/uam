package at.jeff.project.repository;

import at.jeff.project.model.external.Role;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findRoleByName(String name);
    Optional<Role> findRoleById(String id);
}
