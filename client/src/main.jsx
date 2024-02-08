import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PokemonContext from "./contexts/PokemonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokemonContext>
  </React.StrictMode>
);
