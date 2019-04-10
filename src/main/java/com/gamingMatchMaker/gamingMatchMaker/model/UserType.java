package com.gamingMatchMaker.gamingMatchMaker.model;

public enum UserType {
    admin(1), player(2);

    private int value;

    UserType(int value) {
        this.value = value;
    }

    public int getValue() {return this.value;}
}
