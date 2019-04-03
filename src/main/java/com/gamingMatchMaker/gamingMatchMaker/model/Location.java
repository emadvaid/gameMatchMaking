package com.gamingMatchMaker.gamingMatchMaker.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name="locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", columnDefinition = "int(11)")
    private int id;


    private String zip;
    private String city;
    private String state;
    private float lat;
    private float lng;
    private String locationString;

    @OneToMany(mappedBy="location", cascade=CascadeType.DETACH)
    private final Set<UserRec> userRecSet;

    public Location() {
        this.userRecSet = new HashSet<>();
    }

    public Location(String zip, String city, String state, float lat, float lng, String locationString) {
        this.zip = zip;
        this.city = city;
        this.state = state;
        this.lat = lat;
        this.lng = lng;
        this.locationString = locationString;
        this.userRecSet = new HashSet<>();
    }

    public Location(Location original) {
        this.userRecSet = new HashSet<>();
        if(original == null) {
            return;
        }
        this.zip = original.zip;
        this.city = original.city;
        this.state = original.state;
        this.lat = original.lat;
        this.lng = original.lng;
        this.locationString = original.locationString;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }

    public String getLocationString() {
        return locationString;
    }

    public void setLocationString(String locationString) {
        this.locationString = locationString;
    }
}
