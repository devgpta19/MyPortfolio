import { createContext, useContext, useState, useEffect, useMemo } from 'react';
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

  const muiTheme = useMemo(() => createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === 'dark' ? '#38bdf8' : '#0284c7',
      },
      secondary: {
        main: '#64748b',
      },
      background: {
        default: theme === 'dark' ? '#0f172a' : '#ffffff',
        paper: theme === 'dark' ? '#1e293b' : '#f8fafc',
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h1: { fontSize: '2.5rem', fontWeight: 700 },
      h2: { fontSize: '2rem', fontWeight: 700 },
      h3: { fontSize: '1.5rem', fontWeight: 600 },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
      },
    },
  }), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
