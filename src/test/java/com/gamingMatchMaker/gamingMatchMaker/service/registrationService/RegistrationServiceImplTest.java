package com.gamingMatchMaker.gamingMatchMaker.service.registrationService;

import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import com.gamingMatchMaker.gamingMatchMaker.service.LocationService.LocationService;
import com.gamingMatchMaker.gamingMatchMaker.service.ServiceTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

public class RegistrationServiceImplTest extends ServiceTest {

    @Autowired
    private RegistrationService registrationService;

    @MockBean
    private LocationService locationService;

    @Test
    public void testCreateRegistrationSuccess() {

        // make sure that location search returns the correct location
        when(locationService.GetLocation(LOC_1.getZip())).thenReturn(LOC_1);

        // simulate a call to the service to create a user registration

        // create a new  newUserRecDetails, and s password
        UserRec newUserRecDetails = new UserRec(1,
                "test1@test.com", "test1", "test",
                "password", 22, true, 1, LOC_1);

        String password = "test";

        // call the service method
        Optional<UserRec> result = this.registrationService.createRegistration(newUserRecDetails, password);

        // assert to make sure user reg was created
        assertTrue(result.isPresent());
        if (result.isPresent()) {
            assertEquals(ServiceTest.ID_SUCCESS, result.get().getId());
        }
    }

}