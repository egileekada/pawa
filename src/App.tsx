import React from 'react';  
import LoginScreen from './pages/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import DashboardScreen from './screens/DashboardScreen';
import TransactionScreen from './screens/TransactionScreen';
import CustomerScreen from './screens/CustomerScreen';
import CustomerDetails from './screens/CustomersDetails';
import SettingsScreen from './screens/SettingsScreen';

function App() {
  return ( 
    <Router> 
      <Routes>
        <Route path="/" element={<LoginScreen />} /> 
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard" element={<DashboardScreen />} /> 
          <Route path="/dashboard/transactions" element={<TransactionScreen />} /> 
          <Route path="/dashboard/customer" element={<CustomerScreen />} /> 
          <Route path="/dashboard/customerdetails" element={<CustomerDetails />} />
          <Route path="/dashboard/settings" element={<SettingsScreen />} /> 
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;
