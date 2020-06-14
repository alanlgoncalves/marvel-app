import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
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

interface Props {
  children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
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

  const [theme, setTheme] = useState({} as Theme);
  const [colors, setColors] = useState({} as Colors);

  const toggleTheme = useCallback(async () => {
    let newTheme: Theme;

    if (theme.dark) {
      newTheme = defaultTheme;
    } else {
      newTheme = darkTheme;
    }

    setTheme(newTheme);
    setColors(newTheme.colors);
    await AsyncStorage.setItem('@MarvelApp:theme', JSON.stringify(newTheme));
  }, [theme]);

  useEffect(() => {
    async function loadTheme(): Promise<void> {
      const themeJSON = await AsyncStorage.getItem('@MarvelApp:theme');

      if (!themeJSON) {
        await AsyncStorage.setItem(
          '@MarvelApp:theme',
          JSON.stringify(defaultTheme),
        );

        setTheme(defaultTheme);
        setColors(defaultTheme.colors);

        return;
      }

      const loadedTheme: Theme = JSON.parse(themeJSON);

      setTheme(loadedTheme);
      setColors(loadedTheme.colors);
    }

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {theme && theme.colors && children}
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
