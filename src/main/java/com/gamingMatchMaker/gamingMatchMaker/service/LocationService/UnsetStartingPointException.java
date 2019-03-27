package com.gamingMatchMaker.gamingMatchMaker.service.LocationService;

public class UnsetStartingPointException extends Exception {

	public UnsetStartingPointException() {
		super("Starting zip code is not set");
	}

}
