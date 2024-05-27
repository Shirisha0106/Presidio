package presidio.rentify.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import presidio.rentify.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByEmail(String email);
}
