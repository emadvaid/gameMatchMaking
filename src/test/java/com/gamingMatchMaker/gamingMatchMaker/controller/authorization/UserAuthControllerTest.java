package com.gamingMatchMaker.gamingMatchMaker.controller.authorization;

import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserAuthControllerTest extends com.gamingMatchMaker.gamingMatchMaker.controller.ControllerTest {

    @Test
    public void testAuthUser() throws Exception {

        // usually for testing read mock JSON's from a file

        String mockRequestJSON = readFileFromResources(
                "authUserSuccessRequest.json"
        );
        String mockResponseJSON = readFileFromResources(
                "authUserSuccessResponse.json"
        );

        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/authorizeUser")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mockRequestJSON);

        mockMvc.perform(requestBuilder)
                .andExpect(status().isOk())
                .andExpect(content().json(mockResponseJSON));
    }

}