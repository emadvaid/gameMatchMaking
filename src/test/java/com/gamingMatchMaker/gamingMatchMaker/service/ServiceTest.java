package com.gamingMatchMaker.gamingMatchMaker.service;


import com.gamingMatchMaker.gamingMatchMaker.dao.UserAuthenticationRepository;
import com.gamingMatchMaker.gamingMatchMaker.dao.UserRepository;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import com.gamingMatchMaker.gamingMatchMaker.model.UserType;
import com.gamingMatchMaker.gamingMatchMaker.service.LocationService.LocationService;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserException;
import com.gamingMatchMaker.gamingMatchMaker.service.registrationService.RegistrationService;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
public abstract class ServiceTest {
    @MockBean
    private UserRepository userDao;

    @MockBean
    private UserAuthenticationRepository authDao;

    // Known Id to represent the successful creation of a UserRec or UserAuthentication
    protected static final int ID_SUCCESS = 101;

    // Known Locations
    public static final Location LOC_1 = new Location(1, "90210", "witerfell", "the North",
            3f, 1f, "Winterfel Castle in the north");

    // Known set of users for testing
    public static final UserRec USER1 = new UserRec(1,
            "user1@testDomain.tst",
            "Ned", "stark",
            "Winter*I3_CominG!",
            37, true, UserType.admin.getValue(),
            LOC_1);

    @Before
    public void setupUserRepositoryCreateScenarios() {
        // deal with the error conditions first

        // mock duplicate email creation fail
        List<UserRec> knownUsers = Arrays.asList(
                USER1
        );
        for (UserRec user : knownUsers) {
            when(userDao.save(user))
                    .thenThrow(new UserException("Duplicate email"));
        }

        // catchall for success
        when(userDao.save(any(UserRec.class)))
            .thenAnswer(
                 // use a lambda function to modify the return value (based on the input value)
                    invocation -> {
                        // first get the input UserRec
                        UserRec inputUserRec = invocation.getArgument(0);
                        // make a copy
                        UserRec resultUserRec = new UserRec(inputUserRec);

                        // modify the copy to simulate the user dao return value

                        // give it a known ID
                        resultUserRec.setId(ID_SUCCESS);
                        // also set any default values here

                        // return the copy
                        return resultUserRec;
                    }
            );
    }

    @Before
    public void setupUserRepositoryKnownUsersForFind() {
        // create a list of test user findAll, FindById, findByXXX responses for testing
        List<UserRec> usersIn90210 = Arrays.asList(USER1);
        when(userDao.findByEmail("90210"))
                .thenReturn(Optional.of(usersIn90210));
    }

    @Before
    public void setupUserAuthenticationRepository() {

    }

}
