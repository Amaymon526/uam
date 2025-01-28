package at.jeff.project.model.user;

import de.codecentric.boot.admin.client.registration.Application;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection = "users")
@Data
public class User {

    @Id
    private String id;

    private String username;
    private String email;
    private String password;
    private List<Role> role;
    private Application application; // active Application for user

}
