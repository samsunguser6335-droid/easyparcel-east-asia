import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/config"; // Import i18n configuration first
import "./index.css";
import App from "./App.tsx";

// Ensure i18n is initialized before rendering
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
