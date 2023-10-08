import { useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import { Card } from './component/Card/card';
import globalStyles from './globals.module.css';
function App() {
  return (
    <>
      <Card className={globalStyles.} />
      <div>hi</div>
      <Outlet />
    </>
  );
}

export default App;
