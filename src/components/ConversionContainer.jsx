import React from 'react';
import { Container } from '@mui/material';
import { round } from '@floating-ui/utils';

const ConversionContainer = () => {
  return (
    <Container
      fixed
      sx={{
        backgroundColor: 'wine.main',
        minHeight: '200px',
        borderRadius: '10px',
      }}
    >
      Hello World
    </Container>
  );
};

export default ConversionContainer;
