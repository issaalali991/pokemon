import { useState, useEffect, useContext } from "react";
import Axios from "axios";

import { DataContext } from ".././contexts/PokemonContext.jsx";

import Pokemon from "../components/Pokemon.jsx";

function PokeList() {
  const { pokeList, setPokeList, loading, setIsLoading } =
    useContext(DataContext);
  console.log("loading", loading);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <h1>Pokefight</h1>
          <div className="container">
            {/* // Left Side Pokemon */}
            <Pokemon />

            <div className="centerDiv">
              <button>
                <h3>Fight!</h3>
              </button>
              <img src="" alt="" />
              <ul>
                {pokeList.map((pokemon) => (
                  <li key={pokemon.id}>
                    <h2>
                      <a href={`/pokemon/${pokemon.id}`}>
                        {pokemon.name.english}
                      </a>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
            {/* // Right Side Pokemon */}
            <Pokemon />
          </div>

          <hr />
        </div>
      )}

      {/* <Pokemon />
    

    {loading && <p>Loading...</p>
    }
    {!loading && (
      <div className="PokeList">
        <h2>PokeList</h2>
        <ul>
          {pokeList.map((pokemon) => (
            <li key={pokemon.id}>
           

           <h2>
              <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</a>
           </h2>


            </li>
          ))}
        </ul>
        
      </div>
    )

    }
        */}
    </>
  );
}

export default PokeList;
