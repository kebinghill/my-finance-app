import React from 'react';
import AppDrawer from '../components/AppDrawer.jsx';
import Theme from '../utils/Theme.jsx';

const App = () => {
  return (
    <>
      <Theme>
        <AppDrawer></AppDrawer>
      </Theme>
    </>
  );
};

export default App;
