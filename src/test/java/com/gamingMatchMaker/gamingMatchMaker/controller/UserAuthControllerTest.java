package com.gamingMatchMaker.gamingMatchMaker.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserAuthentication;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserAuthRecPair;
import com.gamingMatchMaker.gamingMatchMaker.service.authService.UserAuthService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.UUID;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserAuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserAuthService service;

    @Test
    public void testAuthUser() throws Exception {

        String testUsername = "user1";
        String testPassword = "pass1";

        AuthUserRequest mockRequest = new AuthUserRequest(testUsername, testPassword);

        Location mockLocation = new Location("30047", "liburn","GA",
                                50.30f,25.5f, "test is a test");

        UserRec mockUserRec = new UserRec("test@aaa.com","test",
                "test","test",1,true,2, mockLocation);

        UserAuthentication mockAuth =  new UserAuthentication(1, UUID.randomUUID(), 1);

        UserAuthRecPair mockAuthRecPair = new UserAuthRecPair(mockAuth, mockUserRec);

        AuthUserResponse mockUserAuthResponse = new AuthUserResponse(mockAuth, new UserDetail(mockUserRec));

        ObjectMapper objMapper = new ObjectMapper();

        String mockRequestJSON = objMapper.writeValueAsString(mockRequest);
        String mockResponseJSON = objMapper.writeValueAsString(mockUserAuthResponse);

        when(service.authByEmailPassword(testUsername, testPassword))
                .thenReturn(mockAuthRecPair);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/authorizeUser")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mockRequestJSON);

        mockMvc.perform(requestBuilder)
                .andExpect(status().isOk())
                .andExpect(content().json(mockResponseJSON));
    }
}