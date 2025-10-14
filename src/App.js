import { Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'; 
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import SearchInterface from './components/SearchInterface';
import TolerantSearch from './components/TolerantSearch';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header /> 
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

//The master assembler, creating the consistent layout and using <Routes> to swap out the 
//main content depending on the URL.