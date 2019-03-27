package com.gamingMatchMaker.gamingMatchMaker.Steam;

import static org.junit.Assert.*;

import org.junit.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ChimneyTest {
	private static final String DEFAULT_STEAMID = "76561197995016920";
	private static final int DEFAULT_GAMEID = 440;

/*******************************************************\
 *                     GetAchLevel                     *
\*******************************************************/	
	
	/**
	 * Tests the GetAchLevel when both the user and the game exists.
	 */
	@Test
	public void test_GAL_UserGame() {
		Chimney vent = new Chimney();
		try {
			assertTrue(vent.GetAchLevel(DEFAULT_STEAMID, DEFAULT_GAMEID) > 0);
		}
		catch (InvalidPlayerrException iue) {
			System.out.println(iue.getMessage());
		}
		catch (InvalidGameException ige) {
			System.out.println(ige.getMessage());
		}
	}
	
	/**
	 * Tests the GetAchLevel when the game does not exist.
	 */
	@Test
	public void test_GAL_User() {
		Chimney vent = new Chimney();
		try {
			vent.GetAchLevel(DEFAULT_STEAMID, 0);
		} 
		catch (InvalidPlayerrException e) {
			fail("Unexpected Exception " + e.getMessage());
		} 
		catch (InvalidGameException e) { }
	}
	
	/**
	 * Tests the GetAchLevel when the user id does not exist.
	 */
	@Test
	public void test_GAL_Game() {
		Chimney vent = new Chimney();
		try {
			vent.GetAchLevel(DEFAULT_STEAMID.substring(1), DEFAULT_GAMEID);
		} 
		catch (InvalidPlayerrException e) { } 
		catch (InvalidGameException e) {
			fail("Unexpected Exception " + e.getMessage());
		}
	}

	/**
	 * Tests the GetAchLevel when the user id and game id are invalid.
	 */
	@Test
	public void test_GAL_NONE() {
		Chimney vent = new Chimney();
		try {
			vent.GetAchLevel(DEFAULT_STEAMID.substring(1), DEFAULT_GAMEID);
		} 
		catch (InvalidPlayerrException e) { } 
		catch (InvalidGameException e) {
			fail("Unexpected Exception " + e.getMessage());
		}
	}

/*******************************************************\
 *                     LoadPlayer                      *
\*******************************************************/	

	/**
	 * Tests the normal actions taken to link a steam account to the user
	 */
	@Test
	public void test_LP_Normal() {
		//TODO clear Player from DB (test DB)
		Chimney vent = new Chimney();
		try {
			vent.LoadPlayer(DEFAULT_STEAMID);
		}
		catch (InvalidPlayerrException ipe) {
			System.out.println(ipe.getMessage());
		}
		//TODO verify the player info is now in the DB (user -> steam id mapping, user -> game id mapping &ach cnt, steam games added)
	}
	
	/**
	 * Tests creating the user -> steam account link when some of the games are already in the DB.
	 */
	@Test
	public void test_LP_PartialGames() {
		//TODO clear Player from DB (test DB)
		//TODO clear some games from the DB and ensure others are there
		Chimney vent = new Chimney();
		try {
			vent.LoadPlayer(DEFAULT_STEAMID);
		}
		catch (InvalidPlayerrException ipe) {
			System.out.println(ipe.getMessage());
		}
		//TODO verify the player info is now in the DB (user -> steam id mapping, user -> game id mapping &ach cnt, some steam games added)
	}
	
	/**
	 * Verify handling the error when the user id is truncated.
	 */
	@Test
	public void test_LP_ShortUID() {
		//TODO clear Player from DB (test DB)
		Chimney vent = new Chimney();
		try {
			vent.LoadPlayer(DEFAULT_STEAMID.substring(1));
			fail("Completed LoadPlayer with steamID " + DEFAULT_STEAMID.substring(1) + " unexpectedly.");
		}
		//pass in the catch
		catch (InvalidPlayerrException ipe) { }
	}
	
	/**
	 * Tests the error handling when the user id is too long.
	 */
	@Test
	public void test_LP_LongUID() {
		//TODO clear Player from DB (test DB)
		Chimney vent = new Chimney();
		try {
			vent.LoadPlayer(DEFAULT_STEAMID.concat("1234"));
			fail("Completed LoadPlayer with steamID " + DEFAULT_STEAMID.concat("1234") + " unexpectedly.");
		}
		catch (InvalidPlayerrException ipe) { }
	}
	
	/**
	 * Tests the error handling when the user id is empty.
	 */
	@Test
	public void test_LP_Empty() {
		//TODO clear Player from DB (test DB)
		Chimney vent = new Chimney();
		try {
			vent.LoadPlayer("");
			fail("Completed LoadPlayer with empty steamID");
		}
		catch (InvalidPlayerrException ipe) { }
	}
	
/*******************************************************\
 *                      LoadGame                       *
\*******************************************************/	
	
	/**
	 * Verify the normal steam game creation works.
	 */
	@Test
	public void test_LG_Normal() {
		//TODO clear Game from DB (test DB)
		Chimney vent = new Chimney();
		try {
			vent.LoadPlayer(DEFAULT_STEAMID);
		}
		catch (InvalidPlayerrException ipe) {
			System.out.println(ipe.getMessage());
		}
		//TODO verify the game is now in the DB
	}
	
	/**
	 * Test the failure expected when a game id is used which is greater than steam has.
	 */
	@Test
	public void test_LG_MaxGID() {
		//TODO clear Player from DB (test DB)
		Chimney vent = new Chimney();
		try {
			vent.LoadGame(2147483647);
			fail("Completed LoadGame with MAX_INT as game id");
		}
		//pass on exception
		catch (InvalidGameException e) { } //max int - don't expect this to be a steam game
	}
	
	/**
	 * Test the failure when 0 is used as the game id.
	 */
	@Test
	public void test_LG_ZeroGID() {
		//TODO clear Player from DB (test DB)
		Chimney vent = new Chimney();
		try {
			vent.LoadGame(0);
			fail("Completed LoadGame with 0 as game id");
		}
		//pass on exception
		catch (InvalidGameException e) { } //max int - don't expect this to be a steam game
	}
	
	/**
	 * Test catching the failure when a negative number is used for the game id.
	 */
	@Test(expected = InvalidPlayerrException.class)
	public void test_LG_NegGID() {
		//TODO clear Game from DB (test DB)
		Chimney vent = new Chimney();		
		try {
			vent.LoadGame(DEFAULT_GAMEID * -1);
			fail("Completed LoadGame with negative number as game id");
		}
		//pass on exception
		catch (InvalidGameException e) { } //max int - don't expect this to be a steam game
	}

} //end class ChimneyTest
