import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul suave
    },
    secondary: {
      main: '#ffcc80', // Naranja suave
    },
    background: {
      default: '#f5f5f5', // Fondo suave
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;