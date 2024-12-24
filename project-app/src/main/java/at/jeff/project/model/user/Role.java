package at.jeff.project.model.user;

import lombok.Data;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document
@Data
public class Role {

    @Id
    private String id = UUID.randomUUID().toString();

    private String name;

    private String description;

    private int permissionsLevel;

}
