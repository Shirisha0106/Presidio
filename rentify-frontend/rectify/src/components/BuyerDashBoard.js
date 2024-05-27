import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BuyerDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/properties');
        setProperties(response.data);
      } catch (error) {
        setError('Failed to fetch properties');
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Buyer Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {properties.map((property) => (
        <div key={property.id}>
          <h3>{property.place}</h3>
          <p>{property.description}</p>
          <button onClick={() => alert(`Contact seller at ${property.sellerEmail}`)}>I'm Interested</button>
        </div>
      ))}
    </div>
  );
};

export default BuyerDashboard;
