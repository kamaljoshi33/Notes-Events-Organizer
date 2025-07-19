import React from 'react';
import { Box, Typography } from '@mui/material';

const SimpleTextPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10vh', // Take full viewport height
        backgroundColor: '#f0f0f0', // Light background for contrast
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h4" component="h1" sx={{ color: '#333', textAlign: 'center' }}>
        It's node to write
      </Typography>
    </Box>
  );
};

export default SimpleTextPage;
