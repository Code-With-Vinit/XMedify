import { StrictMode } from 'react'

import { createRoot,ReactDOM } from 'react-dom/client'
import App from './App.jsx'
// import ReactDOM from "react-dom/client";
import "./index.css";
import Search from "./Search/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import MyBookings from "./MyBookings/MyBookings";

const router= createBrowserRouter ([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"search",
        element:<Search/>,
      },
      {
        path:"my-bookings",
        element:<MyBookings/>,
      },
      {
        path:"/",
        element:<Home/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
