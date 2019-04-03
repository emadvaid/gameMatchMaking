package com.gamingMatchMaker.gamingMatchMaker.controller.registration;

import com.gamingMatchMaker.gamingMatchMaker.controller.authorization.UserDetail;

public class CreateRegistrationResponse {
    UserDetail detail;

    public CreateRegistrationResponse() {
    }

    public CreateRegistrationResponse(UserDetail detail) {
        this.detail = detail;
    }

    public UserDetail getDetail() {
        return detail;
    }

    public void setDetail(UserDetail detail) {
        this.detail = detail;
    }
}
