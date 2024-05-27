package presidio.rentify.service;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import presidio.rentify.entity.Users;

@Service
public class UserService {

    private Map<String, Users> users = new HashMap<>();

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Users registerUser(Users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return users.put(user.getEmail(), user);
    }

    public Users getUserByEmail(String email) {
        return users.get(email);
    }
}

