package presidio.rentify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import presidio.rentify.entity.Property;
import presidio.rentify.service.PropertyService;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/properties")
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    @PostMapping
    public Property addProperty(@RequestBody Property property) {
        return propertyService.addProperty(property);
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/seller/{email}")
    public List<Property> getPropertiesBySeller(@PathVariable String email) {
        return propertyService.getPropertiesBySeller(email);
    }

    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
    }

    @PutMapping
    public Property updateProperty(@RequestBody Property property) {
        return propertyService.updateProperty(property);
    }
}
