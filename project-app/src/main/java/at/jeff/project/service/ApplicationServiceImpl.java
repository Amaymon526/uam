package at.jeff.project.service;

import at.jeff.project.model.user.Application;
import at.jeff.project.model.user.User;
import at.jeff.project.repository.ApplicationRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService {
    
    @Autowired
    private ApplicationRepository applicationRepository;
    
    @Override
    public Application findById(String id) {
        return applicationRepository.findById(id).orElse(null);
    }

    @Override
    public Application save(Application application) {
        applicationRepository.save(application);
        return application;
    }

    @Override
    public void delete(String id) {
        applicationRepository.deleteById(id);
    }

    @Override
    public List<Application> findAllApplications() {
        return Lists.newArrayList(applicationRepository.findAll());
    }
}
