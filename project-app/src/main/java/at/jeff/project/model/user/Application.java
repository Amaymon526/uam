package at.jeff.project.model.user;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
public class Application {

    @Id
    private String id;

    private String name;

    private String description;

    private String routingLink;

    private List<Tags> tags;

    private List<Role> requierdRoles;
}
