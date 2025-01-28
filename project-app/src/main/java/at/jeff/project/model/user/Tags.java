package at.jeff.project.model.user;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Tags {

    @Id
    private String id;

    private String label;

    private String color;

    private String description;
}
