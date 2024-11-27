package at.jeff.project.service;

import at.jeff.project.model.external.Role;
import at.jeff.project.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role save(Role role) {
        if (role != null) {
            return roleRepository.save(role);
        } else {
            return null;
        }
    }

    @Override
    public List<Role> findAllRoles() {
        return roleRepository.findAll();
    }
}
