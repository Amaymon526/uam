package at.jeff.project;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import io.swagger.v3.core.jackson.ModelResolver;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.media.Content;
import io.swagger.v3.oas.models.media.MediaType;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class RestApiDocumentationConfig {

  @Bean
  public OpenAPI springShopOpenAPI() {
    Map<String, Object> beispielPersonRequest = Maps.newHashMap();
    beispielPersonRequest.put("Beispiel_Person_Request", "https://www.variasapps.com/external/api/documentation/person_example_request");

    Components components = new Components()
            .addSecuritySchemes("Bearer_JWT_Auth",
                    new SecurityScheme()
                            .type(SecurityScheme.Type.HTTP)
                            .scheme("bearer"));

    ApiResponse jsonResponse = new ApiResponse()
            .description("Default JSON Response")
            .content(new Content().addMediaType("application/json", new MediaType()));

    components.addResponses("DefaultResponse", jsonResponse);

    return new OpenAPI()
            .components(components)
            .servers(Lists.newArrayList(
                    new Server()
                            .url("http://localhost:8181/uam")
                            .description("Entwicklungssystem")))
            .info(new Info().title("WTM_UAM")
                    .description("User/Auth manager")
                    .version("v1.0")
                    .license(new License().name("Apache 2.0").url("https://www.apache.org/licenses/LICENSE-2.0"))
                    .contact(new Contact().name("").email("")));
  }

  @Bean
  public GroupedOpenApi adminApi() {
    return GroupedOpenApi.builder()
            .group("uam")
            .pathsToMatch("/api/**")
            .build();
  }

  @Bean
  public ModelResolver modelResolver(ObjectMapper objectMapper) {
    io.swagger.v3.core.jackson.ModelResolver.enumsAsRef = true;
    return new ModelResolver(objectMapper);
  }
}
