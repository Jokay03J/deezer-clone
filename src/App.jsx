import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import AuthCallback from "./pages/AuthCallback/AuthCallback";
import Home from "./pages/Home/Home";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "/oauth/callback", element: <AuthCallback></AuthCallback> },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
