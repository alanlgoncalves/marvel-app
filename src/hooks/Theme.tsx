import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

interface Colors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
}

interface ThemeContextData {
  theme: Theme;
  colors: Colors;

  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const defaultTheme = useMemo<Theme>((): Theme => {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '#880018',
        border: '#000000',
      },
    };
  }, []);

  const darkTheme = useMemo<Theme>((): Theme => {
    return {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: '#282828',
        border: '#FFFFFF',
      },
    };
  }, []);

  const [theme, setTheme] = useState(defaultTheme);
  const [colors, setColors] = useState(defaultTheme.colors);

  const toggleTheme = useCallback(async () => {
    if (theme.dark) {
      setTheme(defaultTheme);
      setColors(defaultTheme.colors);
    } else {
      setTheme(darkTheme);
      setColors(darkTheme.colors);
    }

    await AsyncStorage.setItem('@MarvelApp:theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}
