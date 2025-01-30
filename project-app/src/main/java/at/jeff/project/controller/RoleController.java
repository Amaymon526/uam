package at.jeff.project.controller;

import at.jeff.project.model.user.Role;
import at.jeff.project.service.RoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/admin/role")
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @PostMapping(value = "/save", produces = "application/json")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        Role newRole = roleService.save(role);
        return ResponseEntity.ok().body(newRole);
    }

    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<List<Role>> getAllRoles() {
        return ResponseEntity.ok(roleService.findAllRoles());
    }

    @DeleteMapping("/delete")
    public void deleteRole(@RequestBody Role role) {
        roleService.delete(role);
    }
}
