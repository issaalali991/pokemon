import React, { useContext } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { DataContext } from ".././contexts/PokemonContext.jsx";
import PokemonFightLeft from "./PokemonFightLeft.jsx";
import PokemonFightRight from "./PokemonFightRight.jsx";

export default function Figtht() {
  const {
    loading,
    selectedPokemonLeft,
    selectedPokemonRight,
    indexPok1,
    indexPok2,
  } = useContext(DataContext);

  return (
    <div className="h-screen">
      {loading && (
        <div className="my-4">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <div className="flex flex-row justify-center items-center">
          {/* POKEMON LEFT SIDE  */}

          <PokemonFightLeft
            number={"one"}
            index={indexPok1 == null ? null : indexPok1}
            selectedPokemon={selectedPokemonLeft}
          />

          <img src="./vs.svg" alt="" className="mb-4 w-40 h-40" />

          {/* POKEMON RIGHT SIDE  */}

          <PokemonFightRight
            number={"two"}
            index={indexPok2 == null ? null : indexPok2}
            selectedPokemon={selectedPokemonRight}
          />
        </div>
      )}
    </div>
  );
}
