import React from 'react';
import { Drawer, Button } from '@mui/material';
import { palette } from '@mui/system';

const AppDrawer = () => {
  return (
    <Drawer
      variant='permanent'
      anchor={'left'}
      sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' } }}
      open
    >
      <Button variant='text' color='primary'>
        Dashboard
      </Button>
    </Drawer>
  );
};

export default AppDrawer;
