// src/App.js
import React from 'react';
import { Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

// Import all your components
import Header from './components/Header'; // Import the new Header
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import SearchInterface from './components/SearchInterface';
import TolerantSearch from './components/TolerantSearch';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header /> {/* Add the Header component here */}

      <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<SearchInterface />} />
          <Route path="/tolerant-search" element={<TolerantSearch />} />
        </Routes>
      </Container>

      <Footer />
    </Box>
  );
}

export default App;