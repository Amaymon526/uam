package at.jeff.project.repository;

import at.jeff.project.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findUserById(String id);

    Optional<User> findUserByEmail(String email);

    Optional<User> findUserByUsername(String username);
}
