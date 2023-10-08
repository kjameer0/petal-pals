<<<<<<< Updated upstream
import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import { Card } from './component/Card/card';
import ProjectCard from './component/ProjectCard/ProjectCard';
import NavBar from './component/NavBar/NavBar';
import { StyledEngineProvider } from '@mui/material/styles';
import { bountiesWithRequirements } from '../data/bounty';
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <NavBar />
      <ProjectCard data={bountiesWithRequirements[0]} />
      <Outlet />
    </StyledEngineProvider>
  );
}

export default App;
