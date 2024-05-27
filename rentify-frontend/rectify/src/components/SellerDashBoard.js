import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SellerDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [newProperty, setNewProperty] = useState({ place: '', description: '', area: '', bedrooms: '', bathrooms: '' });
  const [error, setError] = useState('');

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/properties/seller/me'); // Adjust the endpoint
      setProperties(response.data);
    } catch (error) {
      setError('Failed to fetch properties');
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const addProperty = async () => {
    try {
      await axios.post('http://localhost:8080/api/properties', newProperty);
      fetchProperties();
    } catch (error) {
      setError('Failed to add property');
    }
  };

  const updateProperty = async (id, updatedProperty) => {
    try {
      await axios.put(`http://localhost:8080/api/properties/${id}`, updatedProperty);
      fetchProperties();
    } catch (error) {
      setError('Failed to update property');
    }
  };

  const deleteProperty = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/properties/${id}`);
      fetchProperties();
    } catch (error) {
      setError('Failed to delete property');
    }
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Place"
          value={newProperty.place}
          onChange={(e) => setNewProperty({ ...newProperty, place: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProperty.description}
          onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Area"
          value={newProperty.area}
          onChange={(e) => setNewProperty({ ...newProperty, area: e.target.value })}
        />
        <input
          type="number"
          placeholder="Bedrooms"
          value={newProperty.bedrooms}
          onChange={(e) => setNewProperty({ ...newProperty, bedrooms: e.target.value })}
        />
        <input
          type="number"
          placeholder="Bathrooms"
          value={newProperty.bathrooms}
          onChange={(e) => setNewProperty({ ...newProperty, bathrooms: e.target.value })}
        />
        <button onClick={addProperty}>Add Property</button>
      </div>
      {properties.map((property) => (
        <div key={property.id}>
          <h3>{property.place}</h3>
          <p>{property.description}</p>
          <p>Area: {property.area}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <button onClick={() => updateProperty(property.id, { ...property, description: 'Updated Description' })}>Update</button>
          <button onClick={() => deleteProperty(property.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SellerDashboard;
