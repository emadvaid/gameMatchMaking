package com.gamingMatchMaker.gamingMatchMaker.controller.location;

import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.service.LocationService.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LocationController {

    @Autowired
    private LocationService service;

    /*
    @CrossOrigin
    @GetMapping("/locations")
    public ResponseEntity<GetLocationReponse> getLocation(){
            List<Location> LocationDetails = this.service.GetLocation();
            GetLocationReponse response = new GetLocationReponse(LocationDetails);
            HttpHeaders header = new HttpHeaders();

            return new ResponseEntity<> (response, header, HttpStatus.OK);
    }
    */
}
