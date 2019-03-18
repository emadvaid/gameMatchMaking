package com.gamingMatchMaker.gamingMatchMaker.controller;

import com.gamingMatchMaker.gamingMatchMaker.model.UserAuthentication;

public class AuthUserResponse {
    private UserAuthentication auth;
    private UserDetail detail;

    public AuthUserResponse(UserAuthentication auth, UserDetail detail) {
        this.auth = auth;
        this.detail = detail;
    }

    public UserAuthentication getAuth() {
        return auth;
    }

    public UserDetail getDetail() {
        return detail;
    }
}
