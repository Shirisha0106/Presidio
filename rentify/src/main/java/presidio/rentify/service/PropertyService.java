package presidio.rentify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import presidio.rentify.entity.Property;
import presidio.rentify.repository.PropertyRepository;

import java.util.List;

@Service
public class PropertyService {
    @Autowired
    private PropertyRepository propertyRepository;

    public Property addProperty(Property property) {
        return propertyRepository.save(property);
    }

    public List<Property> getPropertiesBySeller(String sellerEmail) {
        return propertyRepository.findBySellerEmail(sellerEmail);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public void deleteProperty(Long propertyId) {
        propertyRepository.deleteById(propertyId);
    }

    public Property updateProperty(Property property) {
        return propertyRepository.save(property);
    }
}