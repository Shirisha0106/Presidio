import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import BuyerDashboard from './components/BuyerDashBoard';
import SellerDashboard from './components/SellerDashBoard';
import RegistrationPage from './components/RegistrationPage';
import PropertyList from './components/PropertyList';
import SellerProperties from './components/SellerProperties';
import AddProperty from './components/AddProperty';
import UpdateProperty from './components/UpdateProperty';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
        <Route path="/dashboard/seller" element={<SellerDashboard />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/property/list" element={<PropertyList />} />
        <Route path="/seller/:email" element={<SellerProperties />} />
        <Route path="/add/property" element={<AddProperty />} />
        <Route path="/update/property/:id" element={<UpdateProperty />} />
      </Routes>
    </Router>
  );
};

export default App;
