import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import { Card } from './component/Card/card';
import ProjectCard from './component/ProjectCard/ProjectCard';
import NavBar from './component/NavBar/NavBar';
import { StyledEngineProvider } from '@mui/material/styles';
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
