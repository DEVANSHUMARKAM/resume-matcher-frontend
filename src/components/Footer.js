// src/components/Footer.js

import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub'; // Import the GitHub icon

function Footer() {
  return (
    // Add background color and padding to the footer Box
    <Box component="footer" sx={{ bgcolor: '#1c1e21', color: 'white', py: 3, mt: 'auto' }}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center">
          <strong>Project By:</strong> Devanshu Markam
        </Typography>
        <Typography variant="h5" align="center">
          <strong>Subject:</strong> Information Retrieval
        </Typography>
        <Typography variant="h5" align="center">
          <strong>Roll Number:</strong> [55] | <strong>Enrollment Number:</strong> [21070892]
        </Typography>
        
        {/* NEW: Social Icons Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <IconButton 
            aria-label="github" 
            color="inherit" 
            component={Link} 
            href="https://github.com/DEVANSHUMARKAM" // IMPORTANT: Replace with your GitHub URL
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;