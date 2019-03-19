package com.gamingMatchMaker.gamingMatchMaker.service.authService;

import com.gamingMatchMaker.gamingMatchMaker.dao.UserAuthenticationRepository;
import com.gamingMatchMaker.gamingMatchMaker.dao.UserRepository;
import com.gamingMatchMaker.gamingMatchMaker.model.UserAuthentication;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserAuthServiceImpl implements UserAuthService{
    private static final int MIN_PASSWORD_LEN = 8;

    private final UserRepository userDao;
    private final UserAuthenticationRepository authDao;

    @Autowired
    public UserAuthServiceImpl(UserRepository userDao,
                               UserAuthenticationRepository authDao)
    {
       this.userDao = userDao;
       this.authDao = authDao;
    }

    @Override
    public UserAuthRecPair authByEmailPassword(String email, String password) {

        // first make sure the username and password both exist and are non-empty
        if(email==null || email.length()<1 || password==null || password.length()<1){
            throw new UserAuthenticationException("email and Password required");
        }

        // try to find a userRec record for the given username
        Optional<UserRec> userOpt = userDao.findByEmail(email);

        // fail if record not found
        if(!userOpt.isPresent()){
            throw new UserAuthenticationException("UserRec not found: username = " + email);
        }

        UserRec userRec = userOpt.get();

        // fail if the passwords don't match
        // TODO fix this!!
        if(!password.matches(userRec.getPassword())){
            throw new UserAuthenticationException("Password not match for userRec: username = " + email);
        }

        // userRec is authenticated so create a auth record
        UserAuthentication auth = authDao.save(
                new UserAuthentication(userRec.getId(), userRec.getUser_type()));

        // create a temp userRec object to return
        UserRec tmp = new UserRec(userRec);
        // make sure to remove the password
        tmp.setPassword(null);
        // return the new users record
        UserAuthRecPair result = new UserAuthRecPair();
        result.auth = auth;
        result.userRec = userRec;

        return result;
    }

    @Override
    public void resetUserPassword(String userId) {

    }

    @Override
    public void activateUser(String userId) {

    }
}
