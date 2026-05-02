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
        main: theme === 'dark' ? '#818cf8' : '#4f46e5',
      },
      secondary: {
        main: theme === 'dark' ? '#fb7185' : '#e11d48',
      },
      background: {
        default: theme === 'dark' ? '#0f172a' : '#f8fafc',
        paper: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
      },
      text: {
        primary: theme === 'dark' ? '#f1f5f9' : '#1e293b',
        secondary: theme === 'dark' ? '#94a3b8' : '#64748b',
      }
    },
    typography: {
      fontFamily: "'Outfit', 'Inter', sans-serif",
      h1: { fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.02em' },
      h2: { fontSize: '2.75rem', fontWeight: 700, letterSpacing: '-0.01em' },
      h3: { fontSize: '2rem', fontWeight: 700 },
      body1: { fontSize: '1.1rem', lineHeight: 1.7 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '100px',
            padding: '12px 32px',
            textTransform: 'none',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
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
