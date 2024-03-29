import React, { useState, useEffect, useContext } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { DataContext } from "../contexts/PokemonContext.jsx";
import PokemonLeft from "./PokemonLeft.jsx";
import PokemonRight from "./PokemonRight.jsx";
import FightButton from "./FightButton.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function ScreenStart() {
  const {
    loading,
    selectedPokemonLeft,
    selectedPokemonRight,
    indexPok1,
    indexPok2,
  } = useContext(DataContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.localStorage.getItem("indexPok1")!=null
  //     ? setIndexPok1(window.localStorage.getItem("indexPok1"))
  //     : setIndexPok1(null);
  //   window.localStorage.getItem("indexPok2")!=null
  //     ? setIndexPok2(window.localStorage.getItem("indexPok2"))
  //     : setIndexPok2(null);
  // }, [selectedPokemonLeft, selectedPokemonRight]);
  // console.log("indexPok1", indexPok1);
  // console.log("indexPok2", indexPok2);

  return (
    <div className="h-screen">
      {loading && (
        <div className="my-4">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center">
            <button
              className="text-2xl font-bold mb-4 text-center bg-blue-500 text-white   rounded-lg p-2 border-2 border-blue-700 h-20  bg-opacity-70  hover:bg-opacity-100  hover:bg-blue-500  hover:text-white  cursor-pointer w-72  mr-4"
              onClick={() => {
                window.localStorage.clear("indexPok1");
                navigate("/pokemon/1");
              }}
            >
              Choose Pokemon One
            </button>

            <button
              id="highscoreButton"
              className="text-xl font-bold text-center bg-green-600 text-white rounded-lg p-2 border-2 border-grebg-green-600 ml-52 mr-52 h-14 bg-opacity-70 hover:bg-opacity-100 hover:bg-green-600 hover:text-white cursor-pointer w-48"
              onClick={async () => {
                navigate("/highscore");
              }}
            >
              Highscores
            </button>

            <button
              className="text-2xl font-bold mb-4 text-center bg-blue-500 text-white   rounded-lg p-2 border-2 border-blue-700 h-20  bg-opacity-70  hover:bg-opacity-100  hover:bg-blue-500  hover:text-white  cursor-pointer w-72 ml-4 "
              onClick={() => {
                window.localStorage.clear("indexPok2");
                navigate("/pokemon/2");
              }}
            >
              Choose Pokemon Two
            </button>
          </div>

          <div className="flex flex-row items-center justify-center">
            <PokemonLeft
              className="cursor-pointer"
              key={"one"}
              index={indexPok1 == null ? null : indexPok1}
              selectedPokemon={selectedPokemonLeft}
              onClick={() => {
                window.localStorage.clear("indexPok1");
                navigate("/pokemon/1");
              }}
            />

            <div className="centerDiv">
              {selectedPokemonLeft && selectedPokemonRight ? (
                <FightButton />
              ) : (
                <img src="vs.svg" alt="" className="mb-4 w-40 h-40" />
              )}
            </div>

            <PokemonRight
              className="cursor-pointer"
              key={"two"}
              index={indexPok2 == null ? null : indexPok2}
              selectedPokemon={selectedPokemonRight}
              onClick={() => {
                window.localStorage.clear("indexPok2");
                navigate("/pokemon/2");
              }}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
