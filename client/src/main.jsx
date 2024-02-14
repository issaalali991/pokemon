import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PokemonContextProvider from "./contexts/PokemonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <PokemonContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonContextProvider>
  // </React.StrictMode>
);
