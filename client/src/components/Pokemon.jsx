import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import PokemonDefault from "./PokemonDefault";
import BeatLoader from "react-spinners/BeatLoader";

export default function Pokemon({ number , index}) {
  const {
    pokeList,
    selectedPokemon1,
    setSelectedPokemon1,
    selectedPokemon2,
    setSelectedPokemon2,
    indexPok1,
    indexPok2,
    setIndexPok1,
    setIndexPok2,
   
 
  } = useContext(DataContext);
  const [selected, setSelected] = useState(false);
  let pokemon =
   Math.floor(Math.random() * pokeList.length);
  
  
  console.log(indexPok1, indexPok2, "in Pokemon");
  return !selected ? (
    
    // Unselected State
    <div className="Pokemon bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center w-48 h-48 cursor-pointer">
      
      <PokemonDefault
        selectHandler={() => {
          setSelected(true);
          if (number === "one") {
            // console.log(selectedPokemon1);
            setSelectedPokemon1(true);
            setIndexPok1(pokemon);
            // console.log(
            //   "in Pokemon",
            //   "@ selectHandler",
            //   number,
            //   selectedPokemon1
            // );
          } else {
            console.log(selectedPokemon2);
            setSelectedPokemon2(true);
            setIndexPok2(pokemon);
            
            // console.log(
            //   "in Pokemon",
            //   "@ selectHandler",
            //   number,
            //   selectedPokemon2
            // );
          }
        }}
      />
    </div>
  ) : (
    // Selected Pokemon
    <div className="Pokemon bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center w-48 h-48 ">
      
      <div className="flex justify-center items-center flex-col ">
        <h3
          className="text-2xl font-bold mb-4 text-center bg-slate-500 text-white size-fit  rounded-lg p-2  w-full
      "
        >
          {pokeList[index==null?pokemon:index].name.english}
        </h3>
      </div>
      <PokeImage pokemon={pokeList[index==null?pokemon:index]} />
      <PokeData pokemon={pokeList[index==null?pokemon:index]} />
      {() => {setSelected(false);
      }}
    </div>
    
  );
}

// Pokémon-Typ: Normal
// Pokémon-Typ: Pflanze
// Pokémon-Typ: Feuer
// Pokémon-Typ: Wasser
// Pokémon-Typ: Elektro
// Pokémon-Typ: Kampf
// Pokémon-Typ: Flug
// Pokémon-Typ: Gift
// Pokémon-Typ: Boden
// Pokémon-Typ: Gestein
// Pokémon-Typ: Käfer
// Pokémon-Typ: Eis
// Pokémon-Typ: Psycho
// Pokémon-Typ: Geist
// Pokémon-Typ: Drache
// Pokémon-Typ: Unlicht
// Pokémon-Typ: Stahl
// Pokémon-Typ: Fee

function PokeData({ pokemon }) {
  const gradientColor = `bg-gradient-to-r from-green-500 to-green-${
    pokemon.base.HP > 120
      ? 500
      : pokemon.base.HP > 100 && pokemon.base.HP < 120
      ? 200
      : pokemon.base.HP > 80 && pokemon.base.HP < 120
      ? 150
      : 50
  }`;
  return (
    <div className="PokeData mt-4">
      <div
        className={`bg-green-500 text-white  font-bold rounded-full h-12 flex items-center justify-center mb-4 ${gradientColor}
      } `}
      >
        HP: {pokemon.base.HP}
      </div>
      <div>
        <ul
          className="grid grid-cols-2 gap-2 text-gray-800 font-bold rounded-lg bg-slate-200
        "
        >
          <li>Type: {pokemon.type.join(", ")}</li>
          <li>S-Attack: {pokemon.base["Sp. Attack"]}</li>
          <li>S-Defense: {pokemon.base["Sp. Defense"]}</li>
          <li>Attack: {pokemon.base.Attack}</li>
          <li>Defense: {pokemon.base.Defense}</li>
          <li>Speed: {pokemon.base.Speed}</li>
        </ul>
      </div>
    </div>
  );
}

function PokeImage({ pokemon }) {
  const [pokeImg, setPokeImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();
      console.log(data);
      setPokeImg(data.sprites.front_default);
      setLoading(false);
    };
    getApiData();
  }, []);

  return (
    <div className="PokeImage flex justify-center items-center flex-col">
      {loading && <BeatLoader color="#22C55E" className="my-4" />}
      <img
        src={pokeImg}
        alt={pokemon.name.english}
        className="w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500 
        "
      />
    </div>
  );
}
