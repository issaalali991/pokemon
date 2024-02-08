import { useState, useEffect, useContext } from "react";
import Axios from "axios";

import { DataContext } from ".././contexts/PokemonContext.jsx";

import Pokemon from "../components/Pokemon.jsx";

function PokeList() {
  const { pokeList, loading } = useContext(DataContext);
  console.log("loading", loading);
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          <h1>Pokefight</h1>
          <div className="container">
            // Left Side Pokemon
            <Pokemon />

            <div className="centerDiv">
              <button>
                <h3>Fight!</h3>
              </button>
              <img src="" alt="" />
              <ul>
            {pokeList.map((pokemon) => {
              <li>{pokemon.name.english}</li>;
              //  <li>type</li>
              //  {pok}
              // type: [
              //     "Grass",
              //     "Poison"
              // ],
              // "base": {
              //     "HP": 45,
              //     "Attack": 49,
              //     "Defense": 49,
              //     "Sp. Attack": 65,
              //     "Sp. Defense": 65,
              //     "Speed": 45
              // }
            })}
          </ul>
            </div>
            // Right Side Pokemon
            <Pokemon />
          </div>
          <hr />
         
        </div>
      )}
    </>
  );
}

export default PokeList;
