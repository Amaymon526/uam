package at.jeff.project.repository;

import at.jeff.project.model.user.Application;
import at.jeff.project.model.user.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApplicationRepository extends MongoRepository<Application, String> {
    
    Application findApplicationsByName(String name);
        
    
}
