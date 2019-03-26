package com.gamingMatchMaker.gamingMatchMaker.service.authService;

import com.gamingMatchMaker.gamingMatchMaker.model.UserAuthentication;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;

public class UserAuthRecPair {
    public UserRec userRec;
    public UserAuthentication auth;

    public UserAuthRecPair() {
    }

    public UserAuthRecPair(UserAuthentication auth, UserRec userRec) {
        this.userRec = userRec;
        this.auth = auth;
    }

    public UserRec getUserRec() {
        return userRec;
    }

    public void setUserRec(UserRec userRec) {
        this.userRec = userRec;
    }

    public UserAuthentication getAuth() {
        return auth;
    }

    public void setAuth(UserAuthentication auth) {
        this.auth = auth;
    }
}

