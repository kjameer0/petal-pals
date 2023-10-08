import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorPage } from './ErrorPage.jsx';
import './index.css';
import Projects from './pages/Projects.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    error: <ErrorPage />,
    children: [{ path: '', element: <Projects />, error: <ErrorPage /> }],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
