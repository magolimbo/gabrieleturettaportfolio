import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';  // Import the About component
import ContactPage from './pages/ContactPage'; // Import the Contact component
import HomePage from './pages/HomePage'; // Import the Home component

const App = () => {
  return (
    <Router>
        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Router>
  );
}

export default App;
