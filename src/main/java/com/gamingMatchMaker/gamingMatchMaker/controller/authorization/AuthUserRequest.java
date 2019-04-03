package com.gamingMatchMaker.gamingMatchMaker.controller.authorization;

public class AuthUserRequest {

    private String email;
    private String password;

    public AuthUserRequest() {
    }

    public AuthUserRequest(String username, String password) {
        this.email = username;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
