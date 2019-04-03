package com.gamingMatchMaker.gamingMatchMaker.controller.registration;

import com.gamingMatchMaker.gamingMatchMaker.service.registrationService.RegistrationService;
import org.junit.Before;
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

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class RegistrationControllerTest extends com.gamingMatchMaker.gamingMatchMaker.controller.ControllerTest {

    @Test
    public void testRegisterUserSuccess() throws Exception {

        // usually for testing read mock JSON's from a file

        String mockRequestJSON = readFileFromResources(
                "registerUserSuccessRequest.json"
        );
        String mockResponseJSON = readFileFromResources(
                "registerUserSuccessResponse.json"
        );

        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/register")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mockRequestJSON);

        mockMvc.perform(requestBuilder)
                .andExpect(status().isOk())
                .andExpect(content().json(mockResponseJSON));
    }

    @Test
    public void testRegisterUserFail() throws Exception {

    }


}