import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import { Card } from './component/Card/card';
import ProjectCard from './component/ProjectCard/ProjectCard';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Card />
      <ProjectCard />
      <Outlet />
    </StyledEngineProvider>
  );
}

export default App;
