package com.gamingMatchMaker.gamingMatchMaker.controller.authorization;

import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;

import java.util.Optional;

public class UserDetail {
    private int id;
    private String email;
    private String first_name;
    private String last_name;
    private int age;
    private boolean is_active;
    private int user_type;
    private Location location;

    public UserDetail(int id) {
        this.id = id;
    }

    public UserDetail(int id, String email, String first_name, String last_name,
                      int age, boolean is_active, int user_type, Location location
    ) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.is_active = is_active;
        this.user_type = user_type;
        this.location = location;
    }

    public UserDetail(UserRec orig) {
        this.id = orig.getId();
        this.email = orig.getEmail();
        this.first_name = orig.getFirst_name();
        this.last_name = orig.getLast_name();
        this.age = orig.getAge();
        this.is_active = orig.isIs_active();
        this.user_type = orig.getUser_type();
        this.location = orig.getLocation();
    }

    public UserDetail(UserDetail orig) {
        this.id = orig.getId();
        this.email = orig.getEmail();
        this.first_name = orig.getFirst_name();
        this.last_name = orig.getLast_name();
        this.age = orig.getAge();
        this.is_active = orig.isIs_active();
        this.user_type = orig.getUser_type();
        this.location = orig.getLocation();
    }

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }

    public int getUser_type() {
        return user_type;
    }

    public Location getLocation() {
        return location;
    }
    public void setUser_type(int user_type) {
        this.user_type = user_type;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
}
