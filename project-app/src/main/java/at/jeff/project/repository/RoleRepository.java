package at.jeff.project.repository;

import at.jeff.project.model.external.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {

}
