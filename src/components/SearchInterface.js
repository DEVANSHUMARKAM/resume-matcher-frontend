// src/components/SearchInterface.js

import React, { useState } from 'react'; // <--- THIS IS THE CORRECTED LINE
import axios from 'axios';
import {
  TextField, Button, Box, Typography, CircularProgress,
  List, ListItem, ListItemText, IconButton, Paper
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function SearchInterface() {
  const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0:8000';
  const [query, setQuery] = useState('');
  const [originalQuery, setOriginalQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [relevantDocs, setRelevantDocs] = useState(new Set());

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setResults([]);
    setRelevantDocs(new Set());
    setOriginalQuery(query);
    try {
      const response = await axios.post(`${API_URL}/search`, { query });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    setLoading(false);
  };

  const handleRefineSearch = async () => {
    if (relevantDocs.size === 0) {
      alert('Please mark at least one document as relevant.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/refine-search`, {
        original_query: originalQuery,
        relevant_docs: Array.from(relevantDocs)
      });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error refining search results:', error);
    }
    setLoading(false);
  };

  const toggleRelevance = (filename) => {
    const newRelevantDocs = new Set(relevantDocs);
    if (newRelevantDocs.has(filename)) {
      newRelevantDocs.delete(filename);
    } else {
      newRelevantDocs.add(filename);
    }
    setRelevantDocs(newRelevantDocs);
  };

  return (
    <Paper elevation={3} sx={{ padding: '2rem', width: '100%', maxWidth: '800px' }}>

      <Typography variant="h4" component="h2" gutterBottom align="center">
        Search Resumes
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
          label="Enter job description"
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

      {results.length > 0 && !loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <Button variant="contained" color="success" onClick={handleRefineSearch}>
            Refine Search Based on Selections
          </Button>
        </Box>
      )}

      {loading && <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>}

      {results.length > 0 && !loading && (
        <List>
          {results.map((result, index) => (
            <ListItem
              key={index}
              divider
              sx={{
                bgcolor: relevantDocs.has(result.filename) ? 'action.hover' : 'background.paper',
                borderRadius: 1,
                marginBottom: 1
              }}
              secondaryAction={
                <IconButton edge="end" onClick={() => toggleRelevance(result.filename)}>
                  <ThumbUpIcon color={relevantDocs.has(result.filename) ? 'primary' : 'action'} />
                </IconButton>
              }
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

export default SearchInterface;