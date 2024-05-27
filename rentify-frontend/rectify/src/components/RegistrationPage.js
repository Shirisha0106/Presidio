import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8080/register', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        role
      });
      setRegistrationSuccess(true);
      setErrorMessage('');
    } catch (error) {
      setRegistrationSuccess(false);
      setErrorMessage('Error registering user');
      console.error('Error registering user', error);
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      {registrationSuccess && <p>Registration is successful!</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <input 
        type="text" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
        placeholder="First Name" 
      />
      <input 
        type="text" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
        placeholder="Last Name" 
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="text" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        placeholder="Phone Number" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationPage;
