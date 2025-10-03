// src/components/LandingPage.js

import React from 'react';
import { Typography, Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }}
    >
      {/* HERE IS THE FIX:
        We wrap the animation in a Box with a minimum height.
        This Box reserves the vertical space, preventing the content below from shifting.
      */}
      {/* <Box sx={{ minHeight: '120px', display: 'flex', alignItems: 'center' }}>
        <TypeAnimation
          sequence={[
            'THE INTELLIGENT RESUME MATCHER',
            1500,
            '',
            500,
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: '2.5rem', fontWeight: 'bold' }} // We can remove minHeight from here
          repeat={Infinity}
        />
      </Box> */}

      {/* The rest of the component is the same */}
      <List sx={{ maxWidth: 900 }}>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" sx={{ fontSize: '3rem' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Instantly rank resumes against a job description using advanced TF-IDF and Cosine Similarity." 
            primaryTypographyProps={{ sx: { fontSize: '1.9rem' } }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" sx={{ fontSize: '3rem' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Refine your search results with an intelligent feedback loop powered by the Rocchio Algorithm." 
            primaryTypographyProps={{ sx: { fontSize: '1.9rem' } }}
          />
        </ListItem>
      </List>

      <Button 
        variant="contained" 
        size="large"
        onClick={handleGetStarted}
        sx={{
          padding: '10px 30px',
          fontSize: '1.1rem',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 10px 20px -5px rgba(0,123,255,0.4)',
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
}

export default LandingPage;