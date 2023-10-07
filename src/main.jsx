import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorPage } from "./ErrorPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter({
  path: "",
  component: <App />,
  error: <ErrorPage />,
  children: []
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
