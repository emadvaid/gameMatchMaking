package com.gamingMatchMaker.gamingMatchMaker.model;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;


@Entity
@Table(name="users")
public class UserRec {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", columnDefinition = "int(11)")
    private UUID id = null;


    @Column(unique = true, nullable = false)
    private String email;
    private String first_name;
    private String last_name;
    private String password;
    private int age;
    private boolean is_active;
    private int user_type;

    public UserRec() {
    }

    public UserRec(UserRec original) {
        this.email = original.email;
        this.first_name = original.first_name;
        this.last_name = original.last_name;
        this.password = original.password;
        this.age = original.age;
        this.is_active = original.is_active;
        this.user_type = original.user_type;
    }

    public UserRec(String email, String first_name, String last_name,
                   String password, int age, boolean is_active,
                   int user_type) {
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.age = age;
        this.is_active = is_active;
        this.user_type = user_type;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public void setUser_type(int user_type) {
        this.user_type = user_type;
    }
}
