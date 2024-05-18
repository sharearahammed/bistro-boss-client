import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      
      <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
