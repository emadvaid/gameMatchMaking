package com.gamingMatchMaker.gamingMatchMaker.Steam;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import com.gamingMatchMaker.gamingMatchMaker.Steam.GSON.*;

public class Chimney {
	private static final String DEFAULT_APIKEY = "20AF40F8F4220CD76B495FFE09A9FFA0";
	//format - gameID, key, steamID 
	private static final String USTATS_URL = "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=%d&key=%s&steamid=%s";
	//format - key, steamID
	private static final String OGAMES_URL = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=%s&steamid=%s&include_played_free_games=1";
	//format - key, gameID
	private static final String SCHEMA_URL = "http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=%s&appid=%d";
	
	private String apikey;
	
	/**
	 * Default Constructor, allows for another API Key to be used
	 * @param key
	 */
	public Chimney(String key) {
		this.apikey = key;
		//todo manage database connection?
	}

	/**
	 * Default Constructor using default api key.
	 */
	public Chimney() {
		this.apikey = DEFAULT_APIKEY;
		//todo manage database connection?
	}
	
	/**
	 * Reads the achievement level of another user for the given game.
	 * @param user The user to pull achievement percentages for.
	 * @param gameid The game to pull the achievements for.
	 * @return The achievement percentage if the user and game exist.
	 * @exception InvalidPlayerrException The user id passed in is invalid.
	 * @exception InvalidGameException The game's id passed in it invalid/does not exist (see message for details).
	 */
	public float GetAchLevel(String user, int gameid) throws InvalidPlayerrException, InvalidGameException {
		return 0;
	}
	
	/**
	 * Loads a new player into the database from the steam api.
	 * @param SteamID The ID number of the steam user.
	 * @exception InvalidPlayerrException The user id passed in is invalid.
	 */
	public void LoadPlayer(String SteamID) throws InvalidPlayerrException {
		return;
	}
	
	
	/**
	 * Reads the game data from the Steam API and stores the needed info in the database.
	 * @param appid The Steam ID of the game to load.
	 * @exception InvalidGameException The game's id passed in it invalid/does not exist (see message for details).
	 */
	public void LoadGame(int appid) throws InvalidGameException {
		return;
	}

	//pull the url and handle traffic
	private static String getURL(String url) {
		//fixup the url
		URL address;
		try {
			address = new URL(url);
		}
		catch (MalformedURLException e) {
			System.out.println("====>" + e.getMessage());
			return new String();
		}
		
		//make the hookup
		HttpURLConnection con;
		try {
			con = (HttpURLConnection) address.openConnection();
		}
		catch(IOException e) {
			System.out.println("====>" + e.getMessage());
			return new String();
		}

		// optional default is GET
		try {
			con.setRequestMethod("GET");
		}
		catch (ProtocolException e) {
			System.out.println("====>" + e.getMessage());
			return new String();
		}

		//this executes the get? - maybe check with wireshark if ever important
		int responseCode = 0; 
		try {
			responseCode = con.getResponseCode();
		}
		catch(IOException e) {
			System.out.println("====>" + e.getMessage());
			return new String();
		}
		
		//todo handle bad response codes

		//read the response
		StringBuffer response = new StringBuffer();
		try {
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine = new String();
	
			//grab each line from the response
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			//fix dangling
			in.close();
		}
		catch(IOException e) {
			System.out.println("====>" + e.getMessage());
			return new String();
		}
		
		//convert to a string
		return response.toString();
	}
}
