package at.jeff.project.controller;

import at.jeff.project.model.User;
import at.jeff.project.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Slf4j
@RequestMapping("/api/user/")
public class UserController {


    @Autowired
    private UserService userService;

    @GetMapping(value = "all")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.findAllUsers());
    }


    @PostMapping(value = "save")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        User userNew = userService.save(user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping(value = "delete/{id}")
    public ResponseEntity<Boolean> deleteUser(@PathVariable String id) {
        userService.delete(id);
        return ResponseEntity.ok(true);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<User> getUser(@PathVariable String id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping(value = "me")
    public ResponseEntity<User> currentUser(@RequestParam String id) {
        if (id != null) {
            User user = userService.findById(id);
            user.setPassword(null);
            return ResponseEntity.ok(user);
        } else {
            log.error("User id is null");
        }
        return null;
    }





}
