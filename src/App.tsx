import React from 'react';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
