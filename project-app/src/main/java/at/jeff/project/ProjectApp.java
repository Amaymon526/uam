package at.jeff.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@EnableMongoRepositories(basePackages = {"at.jeff.project.repository"})
@EnableConfigurationProperties({ProjectProperties.class})
@EnableGlobalMethodSecurity(securedEnabled = true)
@EnableCaching(proxyTargetClass = true)
@SpringBootApplication(scanBasePackages = {"at.jeff.project"})
public class ProjectApp {
    public static void main(String[] args) {
        SpringApplication.run(ProjectApp.class, args);
    }

    @Bean
    public RestTemplateBuilder restTemplateBuilder() {
        return new RestTemplateBuilder();
    }

}
