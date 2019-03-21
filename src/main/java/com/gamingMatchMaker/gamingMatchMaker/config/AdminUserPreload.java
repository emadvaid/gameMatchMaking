package com.gamingMatchMaker.gamingMatchMaker.config;

import com.gamingMatchMaker.gamingMatchMaker.dao.LocationRepository;
import com.gamingMatchMaker.gamingMatchMaker.dao.UserRepository;
import com.gamingMatchMaker.gamingMatchMaker.model.Location;
import com.gamingMatchMaker.gamingMatchMaker.model.UserRec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminUserPreload implements ApplicationRunner {
    private final UserRepository userDao;
    private final LocationRepository locDao;

    @Value("${createAdmin:#{null}}")
    private String createAdmin;
    @Value("${adminUsername:#{null}}")
    private String adminEmail;
    @Value("${adminPass:#{null}}")
    private String adminPassword;

    @Autowired
    public AdminUserPreload(UserRepository userDao, LocationRepository locDao) {
        this.userDao = userDao;
        this.locDao = locDao;
    }
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) {
        if(createAdmin!=null && "true".equals(createAdmin.trim().toLowerCase())) {

            // defaults for the "bootstrapping admin"
            String email = "admin";
            String password = "password";

            // Allow overriding the defaults if set in config files
            if(adminEmail != null && adminEmail.length()>1) {
                email = adminEmail;
            }
            // Allow overriding the defaults if set in config files
            if(adminPassword != null && adminPassword.length()>1) {
                password = adminPassword;
            }

            // first check if the admin user is in the database
            if(!userDao.findByEmail("admin@aaa.com").isPresent()) {
                // create location for admin user
                Location adminLocation = new Location();
                adminLocation = locDao.save(adminLocation);
                // create the admin user
                UserRec adminUserRec = new UserRec(
                        "admin@aaa.com", "admin", "admin","password",
                        99, true, 1, adminLocation);
                adminUserRec.setPassword(passwordEncoder.encode(password));
                userDao.save(adminUserRec);
            }
        }
    }
}
