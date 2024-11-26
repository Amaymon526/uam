package at.jeff.project.controller;


import at.jeff.project.model.external.Role;
import at.jeff.project.repository.RoleRepository;
import at.jeff.project.service.RoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/admin/role")
public class RoleController {

    @Autowired
    private RoleService roleService;


    @PostMapping()
    public ResponseEntity<Role> createRole(@RequestBody Role role) {
        Role newRole = roleService.save(role);
        return ResponseEntity.ok().body(newRole);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Role>> getAllRoles() {
        return ResponseEntity.ok(roleService.findAllRoles());
    }

}
