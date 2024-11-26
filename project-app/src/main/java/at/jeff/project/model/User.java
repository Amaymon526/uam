package at.jeff.project.model;

import at.jeff.project.model.external.Role;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document
@Data
public class User {

    @Id
    private String id = UUID.randomUUID().toString();

    private String username;
    private String email;
    private String password; //muss noch gehashed

    private List<Role> role;


}
