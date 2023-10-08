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
import { bountiesWithRequirements } from '../data/bounty';
import { Sidebar } from './component/Sidebar/Sidebar';
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <NavBar />
      <div className='flex-container'>
        <Sidebar />
        <ProjectCard data={bountiesWithRequirements[0]} />
      </div>
      <Outlet />
    </StyledEngineProvider>
  );
}

export default App;
