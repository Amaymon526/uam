package at.jeff.project.service;

import at.jeff.project.model.user.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User findById(String id);

    User save(User user);

    void delete(String id);

    List<User> findAllUsers();

    Optional<User> findUserByEmail(String email);

    Optional<User> findUserByUsername(String username);
}
