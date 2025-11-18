import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure index.html has <div id='root'></div>");
}

console.log("Starting React app...");

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  console.log("React app rendered successfully!");
} catch (error) {
  console.error("Error rendering app:", error);
  rootElement.innerHTML = `<div style="padding: 20px; color: red;">
    <h1>Error loading application</h1>
    <p>${error.message}</p>
    <p>Check the browser console for more details.</p>
  </div>`;
}
