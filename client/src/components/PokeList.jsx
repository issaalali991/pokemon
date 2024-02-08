import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import PokemonContext from "../contexts/PokemonContext.jsx";
import Pokemon from "../components/Pokemon.jsx";

function PokeList() {
  const { pokeList } = useContext(PokemonContext);
  return (
    <div>
      <h1>Pokefight</h1>
      <div className="container">
        <Pokemon />

        <div className="centerDiv">
          <button>
            <h3>Fight!</h3>
          </button>
          <img src="" alt="" />
        </div>

        <Pokemon />
      </div>
      <hr />
      <ul>
        {pokeList.forEach((pokemon) => {
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
  );
}

export default PokeList;
