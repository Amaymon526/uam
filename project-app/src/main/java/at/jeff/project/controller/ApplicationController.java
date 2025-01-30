package at.jeff.project.controller;

import at.jeff.project.model.user.Application;
import at.jeff.project.model.user.User;
import at.jeff.project.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/app")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping(value = "/save", produces = "application/json")
    public ResponseEntity<Application> saveApplications(@RequestBody Application application) {
        Application newApplication = applicationService.save(application);
        return ResponseEntity.ok().body(newApplication);
    }

    @GetMapping(value = "all", produces = "application/json")
    public ResponseEntity<List<Application>> getAllApplications() {
        return ResponseEntity.ok(applicationService.findAllApplications());
    }

}
