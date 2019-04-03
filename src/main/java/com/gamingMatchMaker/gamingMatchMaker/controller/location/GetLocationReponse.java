package com.gamingMatchMaker.gamingMatchMaker.controller.location;

import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import java.util.List;

public class GetLocationReponse {
    private List<Location> locations;

    public GetLocationReponse(List<Location> locations) {
        this.locations = locations;
    }

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }
}
