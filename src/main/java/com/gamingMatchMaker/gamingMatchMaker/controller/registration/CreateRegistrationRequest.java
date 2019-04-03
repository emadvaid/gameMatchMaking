package com.gamingMatchMaker.gamingMatchMaker.controller.registration;

import com.gamingMatchMaker.gamingMatchMaker.controller.authorization.UserDetail;

public class CreateRegistrationRequest {
    UserDetail userDetail;
    String password;

    public CreateRegistrationRequest() {
    }

    public CreateRegistrationRequest(UserDetail detail, String password) {
        this.userDetail = detail;
        this.password = password;
    }

    public UserDetail getUserDetail() {
        return userDetail;
    }

    public void setUserDetail(UserDetail userDetail) {
        this.userDetail = userDetail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
