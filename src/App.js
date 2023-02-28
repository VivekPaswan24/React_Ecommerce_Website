import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import RootLayout from "./Pages/Root";
import StorePage from "./Pages/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <StorePage /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Home", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
