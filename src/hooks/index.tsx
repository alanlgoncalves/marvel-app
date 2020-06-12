import React from 'react';
import { ThemeProvider } from './Theme';
import { FavoritesProvider } from './FavoriteCharacters';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FavoritesProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FavoritesProvider>
  );
};

export default AppProvider;
