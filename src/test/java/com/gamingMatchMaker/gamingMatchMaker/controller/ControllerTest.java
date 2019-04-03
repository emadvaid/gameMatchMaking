package com.gamingMatchMaker.gamingMatchMaker.controller;

import com.gamingMatchMaker.gamingMatchMaker.controller.authorization.UserDetail;
import com.gamingMatchMaker.gamingMatchMaker.controller.registration.CreateRegistrationRequest;
import com.gamingMatchMaker.gamingMatchMaker.controller.registration.CreateRegistrationResponse;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserAuthentication;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserAuthRecPair;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserAuthService;
import com.gamingMatchMaker.gamingMatchMaker.service.registrationService.RegistrationService;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ControllerTest {

    protected static final String TEST_USERNAME = "user1";
    protected static final String TEST_PASSWORD = "pass1";

    @Autowired
    protected MockMvc mockMvc;

    @MockBean
    private UserAuthService userAuthService;

    @MockBean
    private RegistrationService registrationService;

    @Before
    public void setupUserAuthService() {
        // build the mock server responses
        Location mockLocation = new Location("30047", "liburn","GA",
                50.30f,25.5f, "test is a test");

        UserRec mockUserRec = new UserRec("test@aaa.com","test",
                "test","test",1,true,2, mockLocation);

        UserAuthentication mockAuth =  new UserAuthentication(1,
                UUID.fromString("ee97d265-4828-4aa5-8b7c-1ab41b03b405"), 1);

        UserAuthRecPair mockAuthRecPair = new UserAuthRecPair(mockAuth, mockUserRec);

        when(userAuthService.authByEmailPassword(TEST_USERNAME, TEST_PASSWORD))
                .thenReturn(mockAuthRecPair);
    }

    @Before
    public void setupRegistrationService() {
        Location mockLocation = new Location("99004","testCiy","NY",
                20.05f,15.50f,"Jon test location");
        UserDetail mockUserDetail = new UserDetail(-1,"testJon#test.com","Jon","Test",37,true,1,mockLocation);
        CreateRegistrationRequest request =  new CreateRegistrationRequest(mockUserDetail, "password1");

        mockUserDetail.getId();

        Location mockLocationRec = new Location(mockLocation);
        mockLocationRec.setId(42);
        UserRec response = new UserRec(mockUserDetail);
        response.setId(43);
        response.setLocation(mockLocationRec);

        when(registrationService.createRegistration(new UserRec(request.getUserDetail()), request.getPassword()))
                .thenReturn(Optional.of(response));
    }

    protected String readFileFromResources(String fileName) {
        String result;

        String pathName = this.getClass().getPackage().getName().replace('.', '/') + "/" + fileName;

        InputStream inputStream =
                this.getClass().getClassLoader().getResourceAsStream(pathName);

        result = new BufferedReader(new InputStreamReader(inputStream))
                .lines().collect(Collectors.joining("\n"));

        return result;
    }
}
