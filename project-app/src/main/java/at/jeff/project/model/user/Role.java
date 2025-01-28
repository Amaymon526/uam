package at.jeff.project.model.user;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document
@Data
public class Role {

    @Id
    private String id;

    private String name;

    private String description;

    private int permissionsLevel;

}
