import React from 'react';
import Theme from '../utils/Theme.jsx';

import AppDrawer from '../components/AppDrawer.jsx';
import ConversionContainer from '../components/ConversionContainer.jsx';

const App = () => {
  return (
    <Theme>
      <AppDrawer></AppDrawer>
      <ConversionContainer></ConversionContainer>
    </Theme>
  );
};

export default App;
