package com.gamingMatchMaker.gamingMatchMaker.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "auth")
public class UserAuthentication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID accessToken;

    private int userId;
    private int user_type;

    public UserAuthentication() {
    }

    public UserAuthentication(int userId, int user_type) {
        this.userId = userId;
        this.user_type = user_type;
        this.accessToken = null;
    }

    public UserAuthentication(int userId, UUID accessToken, int user_type) {
        this.userId = userId;
        this.accessToken = accessToken;
        this.user_type = user_type;
    }

    public UserAuthentication(UserRec authCredentials) {
        this.accessToken = null;
        this.userId = authCredentials.getId();
        this.user_type = authCredentials.getUser_type();
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public UUID getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(UUID accessToken) {
        this.accessToken = accessToken;
    }

    public int getUser_type() {
        return user_type;
    }

    public void setUser_type(int user_type) {
        this.user_type = user_type;
    }
}
