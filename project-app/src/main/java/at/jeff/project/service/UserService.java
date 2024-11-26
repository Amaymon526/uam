package at.jeff.project.service;

import at.jeff.project.model.User;
import at.jeff.project.repository.UserRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public User findById(String id) {

        return userRepository.findById(id).orElse(null);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void delete(String id) {
        userRepository.deleteById(id);
    }

    public List<User> findAllUsers() {
        return Lists.newArrayList( userRepository.findAll());
    }


}
