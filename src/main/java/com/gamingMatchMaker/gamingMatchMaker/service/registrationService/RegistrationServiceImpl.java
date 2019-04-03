package com.gamingMatchMaker.gamingMatchMaker.service.registrationService;

import com.gamingMatchMaker.gamingMatchMaker.dao.LocationRepository;
import com.gamingMatchMaker.gamingMatchMaker.dao.UserAuthenticationRepository;
import com.gamingMatchMaker.gamingMatchMaker.dao.UserRepository;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    private final UserRepository userDao;
    private final   UserAuthenticationRepository authDao;
    private final LocationRepository locDao;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public RegistrationServiceImpl(
            UserRepository userDao,
            UserAuthenticationRepository authDao,
            LocationRepository locDao,
            PasswordEncoder passwordEncoder
    ){
        this.userDao = userDao;
        this.authDao = authDao;
        this.locDao = locDao;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Optional<UserRec> createRegistration(UserRec newUserRecDetails, String password) {
        // check for empty details
        if(newUserRecDetails ==  null){
            throw new UserException("newUserRecDetails can not be null");
        }
        // check for empty username
        if(newUserRecDetails.getEmail()== null || newUserRecDetails.getEmail().length()<1){
            throw new UserException("Email cannot be empty");
        }
      
        //check for duplicate
        if(userDao.findByEmail(newUserRecDetails.getEmail()).isPresent()){
            throw new UserException("email already exists");
        }

        String zip = newUserRecDetails.getLocation().getZip();

        zip = zip.trim().substring(0, 5);

        Optional<Location> tempLoc = this.locDao.findByZip(zip);

        if(!tempLoc.isPresent()) {
            throw new UserException("Location not found for Zip Code: " + zip);
        }

        UserRec tempUser = new UserRec(newUserRecDetails);

        tempUser.setLocation(tempLoc.get());
        tempUser.setPassword(passwordEncoder.encode(password));
        // insert the new user
        UserRec newUserRec = userDao.save(tempUser);

        // make sure the insert was successful
        if(newUserRec == null || newUserRec.getEmail() == null) {
            throw new UserException("could not create user");
        }

        return Optional.of(newUserRec);

    }
}
