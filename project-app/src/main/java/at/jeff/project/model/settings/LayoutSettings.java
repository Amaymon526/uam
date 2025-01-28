package at.jeff.project.model.settings;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class LayoutSettings {
    @Id
    private String id;

    private boolean darkmode;

}
