import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1c1e21' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component={RouterLink} // Use RouterLink for navigation
            to="/" 
            sx={{ 
              color: 'white', 
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: '8px'
            }}
          >
            THE RESUME MATCHER
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;