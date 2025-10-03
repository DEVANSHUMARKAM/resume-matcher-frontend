// src/components/Dashboard.js
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 6, // Increases shadow depth on hover
    },
  };

  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Project Dashboard
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 5 }}>
        Choose an Information Retrieval method to begin.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Card 1: Standard Search */}
        <Grid item xs={12} md={5}>
          <Card sx={cardStyle}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Standard Search
              </Typography>
              <Typography>
                A high-precision search using the Vector Space Model. It's fast and effective but does not handle spelling mistakes or variations.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', mb: 2 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/search')}
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Use
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 2: Tolerant Search */}
        <Grid item xs={12} md={5}>
          <Card sx={cardStyle}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Tolerant Search
              </Typography>
              <Typography>
                A flexible search that handles user errors like typos and wildcards, providing a more user-friendly experience.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', mb: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/tolerant-search')}
                 sx={{
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                }}
              >
                Use
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;