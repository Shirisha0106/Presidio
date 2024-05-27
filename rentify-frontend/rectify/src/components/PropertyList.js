import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/api/properties')
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
