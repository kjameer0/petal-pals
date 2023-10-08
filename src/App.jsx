import { Outlet } from 'react-router';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Sidebar} from './component/Sidebar/sidebar.jsx'
import Projects from './pages/Projects';

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
      <div className='flex-container'>
        <Sidebar />
        <Projects />
      </div>
      <Outlet />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
