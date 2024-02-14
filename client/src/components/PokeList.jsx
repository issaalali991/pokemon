import React, { useState, useEffect, useContext } from "react";

import BeatLoader from "react-spinners/BeatLoader";
import { DataContext } from ".././contexts/PokemonContext.jsx";
import Pokemon from "../components/Pokemon.jsx";
import FightButton from "./FightButton.jsx";
import { useNavigate } from "react-router-dom";

function PokeList() {
  const {
    pokeList,
    setPokeList,
    loading,
    setIsLoading,
    selectedPokemon1,
    selectedPokemon2,
    indexPok1,
    indexPok2,
    setIndexPok1,
    setIndexPok2,
  } = useContext(DataContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.localStorage.getItem("indexPok1")!=null
  //     ? setIndexPok1(window.localStorage.getItem("indexPok1"))
  //     : setIndexPok1(null);
  //   window.localStorage.getItem("indexPok2")!=null
  //     ? setIndexPok2(window.localStorage.getItem("indexPok2"))
  //     : setIndexPok2(null);
  // }, [selectedPokemon1, selectedPokemon2]);
  // console.log("indexPok1", indexPok1);
  // console.log("indexPok2", indexPok2);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading && (
        <div className="my-4">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-8 text-white  shadow
          "
          >
            Pokefight
          </h1>
          {/* <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
            onClick={() => {
              window.localStorage.clear();
             

            }
            }
            >
              Restart
            </button> */}
          <div className="flex justify-around items-center mb-8">
            {/* Left Side Pokemon */}

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
              onClick={() => {
                window.localStorage.clear("indexPok1");

                navigate("/pokemon/1");
              }}
            >
              Choose Pokemon One
            </button>

            <Pokemon
              number={"one"}
              index={indexPok1 == null ? null : indexPok1}
              selectedPokemon={selectedPokemon1}
            />

            <div className="centerDiv">
              {selectedPokemon1 && selectedPokemon2 ? (
                <FightButton />
              ) : (
                <img src="./vs.png" alt="" className="mb-4 w-20 h-20" />
              )}
            </div>
            {/* Right Side Pokemon */}
            <Pokemon
              number={"two"}
              index={indexPok2 == null ? null : indexPok2}
              selectedPokemon={selectedPokemon2}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
              onClick={() => {
                window.localStorage.clear("indexPok2");
                navigate("/pokemon/2");
              }}
            >
              Choose Pokemon Two
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokeList;
