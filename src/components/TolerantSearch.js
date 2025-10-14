import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField, Button, Box, Typography, CircularProgress,
  List, ListItem, ListItemText, Paper
} from '@mui/material';

function TolerantSearch() {
  const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setResults([]);

    try {
      const response = await axios.post(`${API_URL}/tolerant-search`, {
        query: query
      });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching tolerant search results:', error);
      alert('Failed to fetch search results.');
    }

    setLoading(false);
  };

  return (
    <Paper elevation={3} sx={{ padding: '2rem', width: '100%', maxWidth: '800px' }}>

      <Typography variant="h4" component="h2" gutterBottom align="center">
        Tolerant Search
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{mb: 2}}>
        This search corrects spelling and handles wildcard searches (*).
      </Typography>

      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          marginBottom: 4
        }}
      >
        <TextField
          fullWidth
          label="Enter job description with typos or wildcards..."
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
          multiline
          rows={8} 
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={loading}
          sx={{
            width: '250px', 
            padding: '12px 0',
            fontSize: '1rem',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
        </Button>
      </Box>

      {loading && <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>}

      {results.length > 0 && !loading && (
        <List>
          {results.map((result, index) => (
            <ListItem
              key={index}
              divider
              sx={{
                borderRadius: 1,
                marginBottom: 1
              }}
            >
              <ListItemText
                primary={result.filename}
                secondary={`Relevance Score: ${result.score}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}

export default TolerantSearch;