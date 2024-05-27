package presidio.rentify.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import presidio.rentify.entity.Property;
import java.util.List;


public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findBySellerEmail(String sellerEmail);
}
