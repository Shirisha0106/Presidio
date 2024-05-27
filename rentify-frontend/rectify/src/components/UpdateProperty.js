import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
  const [property, setProperty] = useState({});

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/properties', property)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} placeholder="Property Name" />
        <input type="text" name="location" onChange={handleChange} placeholder="Location" />
        {/* Add more fields as required */}
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
