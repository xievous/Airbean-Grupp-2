import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Status from "./pages/Status/Status";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/ModalNav/Modal";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/status",
      element: <Status />,
    },
    {
     path:'/navbar', 
     element: <Navbar />
   },
   {
     path:'/modal', 
     element: <Modal />
   }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
