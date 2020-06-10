import React from 'react';
import { ThemeProvider } from './Theme';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
