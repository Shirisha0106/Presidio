
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellerProperties = ({ email }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(`/api/properties/seller/${email}`)
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, [email]);

  return (
    <div>
      <h2>Properties for {email}</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SellerProperties;
