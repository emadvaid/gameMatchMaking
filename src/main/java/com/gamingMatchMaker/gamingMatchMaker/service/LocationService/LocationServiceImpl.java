package com.gamingMatchMaker.gamingMatchMaker.service.LocationService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gamingMatchMaker.gamingMatchMaker.dao.LocationRepository;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;

@Service
public class LocationServiceImpl implements LocationService {
	private final LocationRepository atlas;
	
	@Autowired
	public LocationServiceImpl(LocationRepository places) {
		atlas = places;
	}

	/**
	 * 
	 * @param 
	 */
	@Override

	public Location GetLocation(String zipCode) {
		Optional<Location> place = atlas.findByZip(zipCode);
		
		if(place.isPresent()) return place.get();
		else throw new BadZipException();
	}
	
	

}
