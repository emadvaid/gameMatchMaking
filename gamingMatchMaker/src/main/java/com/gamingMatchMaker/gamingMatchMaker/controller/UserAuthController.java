package com.gamingMatchMaker.gamingMatchMaker.controller;

import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserAuthRecPair;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserAuthController {

    @Autowired
    private UserAuthService service;

    @CrossOrigin
    @PostMapping("/authorizeUser")
    public ResponseEntity<AuthUserResponse> authUser(@RequestBody AuthUserRequest request) {
        UserAuthRecPair authResults = service.authByEmailPassword(request.getEmail(), request.getPassword());

        HttpHeaders headers = new HttpHeaders();

        return new ResponseEntity<>(
                new AuthUserResponse(authResults.auth, new UserDetail(authResults.userRec)),
                headers, HttpStatus.OK);
    }
}