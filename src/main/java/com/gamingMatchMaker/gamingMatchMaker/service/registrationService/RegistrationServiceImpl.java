package com.gamingMatchMaker.gamingMatchMaker.service.registrationService;

import com.gamingMatchMaker.gamingMatchMaker.dao.LocationRepository;
import com.gamingMatchMaker.gamingMatchMaker.dao.UserAuthenticationRepository;
import com.gamingMatchMaker.gamingMatchMaker.dao.UserRepository;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import com.gamingMatchMaker.gamingMatchMaker.service.LocationService.LocationService;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    private final UserRepository userDao;
    private final UserAuthenticationRepository authDao;
    private final LocationService locService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public RegistrationServiceImpl(
            UserRepository userDao,
            UserAuthenticationRepository authDao,
            LocationService locService,
            PasswordEncoder passwordEncoder
    ){
        this.userDao = userDao;
        this.authDao = authDao;
        this.locService = locService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Optional<UserRec> createRegistration(UserRec newUserRecDetails, String password) {
        // check for empty password
        if(password == null){
            throw new UserException("Password cannot be empty");
        }
        // make sure the newUserRecDetails is not null
        if(newUserRecDetails ==  null){
            throw new UserException("newUserRecDetails can not be null");
        }
        // check for empty username
        if(newUserRecDetails.getEmail()== null || newUserRecDetails.getEmail().length()<1){
            throw new UserException("Email cannot be empty");
        }
      
        //check for duplicate
        // check for empty location
        if(newUserRecDetails.getLocation()==null) {
            throw new UserException("Location cannot be empty");
        }

        String zip = newUserRecDetails.getLocation().getZip();

        // make sure location and zip are present
        if(zip == null || (zip=zip.trim()).length() < 5) {
            throw new UserException("Need valid zip code");
        }

        //check for duplicate emails
        if(userDao.findByEmail(newUserRecDetails.getEmail()).isPresent()){
            throw new UserException("email already exists");
        }

        zip = zip.trim().substring(0, 5);

        Location tempLoc = this.locService.GetLocation(zip);

        if(tempLoc == null) {
            throw new UserException("Location not found for Zip Code: " + zip);
        }

        UserRec tempUser = new UserRec(newUserRecDetails);

        tempUser.setLocation(tempLoc);
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
