package at.jeff.project.model.user;

import lombok.Data;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document
@Data
public class Applications {

    @Id
    private String id = UUID.randomUUID().toString();

    private String name;

    private String description;

    private String routingLink;

    private List<Tags> tags;

    private List<Role> requierdRoles;
}
