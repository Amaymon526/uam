package at.jeff.project.service;

import at.jeff.project.model.User;
import at.jeff.project.model.external.Role;
import at.jeff.project.repository.RoleRepository;
import at.jeff.project.repository.UserRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Role save(Role role) {
        return roleRepository.save(role);
    }

    public List<Role> findAllRoles() {
        return Lists.newArrayList( roleRepository.findAll());
    }
}
