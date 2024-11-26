package at.jeff.project;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(
        prefix = "project"
)

@Data
public class ProjectProperties {


}
