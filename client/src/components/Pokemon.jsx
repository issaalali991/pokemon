import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";

export default function Pokemon() {
  const { pokeList } = useContext(DataContext);
  const pokemon=Math.floor(Math.random()*pokeList.length);
  
  return (
    <div className="Pokemon">
      <h3>Pokemon</h3>
      <PokeImage pokemon= {pokeList[pokemon]} />
      <PokeData pokemon= {pokeList[pokemon]}
      />
    </div>
  );
}

function PokeData(
  {pokemon}
) {
  return <div className="PokeData">
    <div className="bg-green-500 text-white font-bold rounded-full h-12  flex items-center justify-center"
    >
     HP: {pokemon.base.HP}
    </div>
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-2 text-center "
      >{pokemon.name.english}</h2>
      <ul className="grid grid-cols-2 gap-2 text-gray-800 "
      >
        <li>Type: {pokemon.type.join(", ")}</li>
        <li>S-Attack: {pokemon.base["Sp. Attack"]}</li>
        <li>S-Defense: {pokemon.base["Sp. Defense"]}</li>

        <li>Attack: {pokemon.base.Attack}</li>
        <li>Defense: {pokemon.base.Defense}</li>
        <li>Speed: {pokemon.base.Speed}</li>
        
      </ul>
    </div>
  </div>;
  
}

function PokeImage({pokemon}) {
  const [pokeImg, setPokeImg] = useState(null);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();
      console.log(data);
      setPokeImg(data.sprites.front_default);
    };
    getApiData();
  }
  );
  return <div >
    <img src={pokeImg} alt={pokemon.name.english} 
    className="w-48 h-48 mx-auto object-cover rounded-full border-4 border-green-500 w-48 h-48 mx-auto object-cover rounded-full border-4 border-green-500
    "
    />
    
  </div>;
}
