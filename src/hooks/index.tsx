import React, { ReactNode } from 'react';
import { ThemeProvider } from './Theme';
import { FavoritesProvider } from './FavoriteCharacters';

interface Props {
  children: ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <FavoritesProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FavoritesProvider>
  );
};

export default AppProvider;
