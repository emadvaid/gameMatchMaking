package com.gamingMatchMaker.gamingMatchMaker.service.authService;

public interface UserAuthService {
    UserAuthRecPair authByEmailPassword(String email, String password);
    void resetUserPassword(String userId);
    void activateUser(String userId);
}
