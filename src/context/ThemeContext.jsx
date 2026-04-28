import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === 'dark' ? '#00f3ff' : '#0078d4',
      },
      secondary: {
        main: theme === 'dark' ? '#ff0055' : '#d83b01',
      },
      background: {
        default: theme === 'dark' ? '#050a0f' : '#f0f4f8',
        paper: theme === 'dark' ? 'rgba(0, 243, 255, 0.05)' : 'rgba(0, 120, 212, 0.05)',
      },
    },
    typography: {
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      h1: { fontSize: '3rem', fontWeight: 800, letterSpacing: '4px' },
      h2: { fontSize: '2.5rem', fontWeight: 800, letterSpacing: '2px' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            border: '1px solid currentColor',
            padding: '10px 25px',
            textTransform: 'uppercase',
            fontWeight: 700,
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
