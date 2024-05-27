import React, { useState } from 'react';
import axios from 'axios';

const AddPropertyForm = ({ sellerEmail }) => {
    const [place, setPlace] = useState('');
    const [area, setArea] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [nearbyHospitals, setNearbyHospitals] = useState('');
    const [nearbyColleges, setNearbyColleges] = useState('');

    const handleAddProperty = async () => {
        try {
            const response = await axios.post('http://localhost:8080/properties', {
                place,
                area,
                bedrooms,
                bathrooms,
                nearbyHospitals,
                nearbyColleges,
                sellerEmail
            });
            alert(`Property ${response.data.id} added successfully!`);
        } catch (error) {
            alert('Adding property failed');
        }
    };

    return (
        <div>
            <h2>Add Property</h2>
            <input
                type="text"
                placeholder="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
            />
            <input
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nearby Hospitals"
                value={nearbyHospitals}
                onChange={(e) => setNearbyHospitals(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nearby Colleges"
                value={nearbyColleges}
                onChange={(e) => setNearbyColleges(e.target.value)}
            />
            <button onClick={handleAddProperty}>Add Property</button>
        </div>
    );
};

export default AddPropertyForm;