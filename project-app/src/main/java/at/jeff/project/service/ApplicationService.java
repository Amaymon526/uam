package at.jeff.project.service;

import at.jeff.project.model.user.Application;
import at.jeff.project.model.user.User;

import java.util.List;

public interface ApplicationService {

    Application findById(String id);

    Application save(Application application);

    void delete(String id);

    List<Application> findAllApplications();
}
