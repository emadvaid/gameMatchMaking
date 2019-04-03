package com.gamingMatchMaker.gamingMatchMaker.controller.registration;

import com.gamingMatchMaker.gamingMatchMaker.controller.authorization.UserDetail;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import com.gamingMatchMaker.gamingMatchMaker.service.registrationService.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class RegistrationController {
    @Autowired
    private RegistrationService service;

    @PostMapping("/register")
    public ResponseEntity<CreateRegistrationResponse> createRegistration(@RequestBody CreateRegistrationRequest request) {
        
        // first create new user
        Optional<UserRec> regUser = service.createRegistration(
                new UserRec(request.getUserDetail()),
                request.getPassword());

        HttpHeaders headers = new HttpHeaders();

        if(!regUser.isPresent()) {
            return new ResponseEntity<>(null, headers, HttpStatus.BAD_REQUEST);
        }

        UserDetail newUser = new UserDetail(regUser.get());

        CreateRegistrationResponse response = new CreateRegistrationResponse(newUser);

        return new ResponseEntity<>(response, headers, HttpStatus.OK);
    }
}


