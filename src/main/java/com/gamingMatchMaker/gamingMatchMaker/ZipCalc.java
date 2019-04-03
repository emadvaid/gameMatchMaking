package com.gamingMatchMaker.gamingMatchMaker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.service.LocationService.*;
import com.grum.geocalc.*;

@Component
public class ZipCalc {
	private String zip;
	private com.grum.geocalc.Point pt;

	//this is here for unit testing- might be removed once matchmaking app is built
	@Autowired
	public LocationService service;

	/**
	 * Need to create a function which takes in a second zipcode and calculates the distance.
	 * TODO Should we cache the result in the DB - which is quicker, the DB read or the local calc?
	 */

	/**
	 *
	 * @param z
	 */
	public ZipCalc() {
	}

	/**
	 *
	 * @param z
	 */
	public ZipCalc(String code) {
		this.SetZip(code);
	}

	/**
	 *
	 * @param zcode
	 */
	public void SetZip(String zcode) {
		this.zip = zcode;

		//read the information from the DB
		Location spot = service.GetLocation(zcode);

		Coordinate lat = Coordinate.fromDegrees(spot.getLat());
		Coordinate lng = Coordinate.fromDegrees(spot.getLng());

		pt = Point.at(lat, lng);
	}

	/**
	 *
	 * @param start
	 * @param dest
	 * @throws UnsetStartingPointException Should never happen, but this is need for the method overloading so the signatures match.
	 * @return
	 */
	public double GetDistance(String start, String dest) throws UnsetStartingPointException {
		this.SetZip(start);
		return this.GetDistance(dest);
	}

	/**
	 *
	 * @param dest
	 * @throws UnsetStartingPointException The SetZip() function has not yet been called.
	 * @throws BadZipException The destination zip code was not found
	 * @return
	 */
	public double GetDistance(String dest) throws UnsetStartingPointException, BadZipException {
		//first check the db for cached?
		if(this.zip == null || this.zip.length() == 0) throw new UnsetStartingPointException();

		//read the information for the second zip code from the DB
		Location spot = service.GetLocation(dest);

		//convert to a point
		Coordinate lat = Coordinate.fromDegrees(spot.getLat());
		Coordinate lng = Coordinate.fromDegrees(spot.getLng());
		Point other = Point.at(lat, lng);

		//calc the distance
		double distance = EarthCalc.vincentyDistance(pt, other); //in meters

		//TODO convert to miles?

		return distance;
	}

	//these are really meant for the unit tests, not actual use
	public double GetStartingLat() {
		return pt.latitude;
	}
	public double GetStartingLong() {
		return pt.longitude;
	}
	public String GetStartingZipCode() {
		return this.zip;
	}

}