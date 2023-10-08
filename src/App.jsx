import { Outlet } from 'react-router';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#28844b',
    },
    secondary: {
      main: '#f50057',
    },
    highlight: {
      main: '#DBEFD8'
    }
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeOptions}>
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
