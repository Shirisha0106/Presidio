package presidio.rentify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import presidio.rentify.entity.Users;
import presidio.rentify.service.UserService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Users registerUser(@RequestBody Users user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody Users user) {
        Users foundUser = userService.getUserByEmail(user.getEmail());
        if (foundUser != null && user.getPassword().equals(foundUser.getPassword())) {
            return foundUser;
        }
        return null; // Return proper error response
    }
}