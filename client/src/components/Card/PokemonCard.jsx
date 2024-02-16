import React, { useEffect, useMemo, useState } from "react";

function PokemonCard({ pokemon }) {
  const [pokeapi, setpokeApi] = useState({});
  const [loading, setLoading] = useState(true);
  const [typePokemonIcons, setTypePokemonIcons] = useState("");

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();
      setpokeApi(data);
      setLoading(false);
      setTypePokemonIcons(data.types.map((type) => getTypeIcon(type.type.name)));
  
      
    };
    getApiData();
  }, [pokemon.id]);
  

  const images = useMemo(() => {
    return pokeapi.sprites
      ? [
          pokeapi.sprites.front_default,
          pokeapi.sprites.back_default,
          pokeapi.sprites.front_shiny,
          pokeapi.sprites.back_shiny,
        ]
      : [];
  }, [pokeapi]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * images.length);
      setIndex(newIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);



  const getTypeIcon = (type) => {
    
    const typeIcons = {
      normal: '👊',
      fire: '🔥',
      water: '💧',
      electric: '⚡',
      grass: '🌱',
      ice: '❄️',
      fighting: '🥊',
      poison: '☠️',
      ground: '🏜️',
      flying: '🕊️',
      psychic: '🔮',
      bug: '🐞',
      rock: '🪨',
      ghost: '👻',
      dragon: '🐉',
      dark: '🌑',
      steel: '🛡️',
      fairy: '🧚',
 
    };

    return typeIcons[type] || '❓'; 
  };

  return (
    <div className=" card">
      <div className=" ">
        <div className="flex justify-center items-center flex-col ">
          <h3
            className="text-2xl font-bold mb-4 text-center bg-slate-500 text-white size-fit  rounded-lg p-2  w-full"
          >
            {pokemon.name.english}
          </h3>
        </div>
        <img
          src={images[index]}
          alt=""
          className="w-80 h-80 m-0 p-0 rounded-full bg-white border-4 border-slate-500 shadow-md mx-auto
          "
        />
        <div className="PokeData mt-4">
        <div
            className={`bg-green-500 text-white  font-bold rounded-full h-12 flex items-center justify-center mb-4 bg-gradient-to-r from-green-500 to-green-${
              pokemon.base.HP > 120
                ? 500
                : pokemon.base.HP > 100 && pokemon.base.HP < 120
                ? 200
                : pokemon.base.HP > 80 && pokemon.base.HP < 120
                ? 150
                : 50
            }
          `}
          >
            HP: {pokemon.base.HP}
          </div>
          <div>
            <ul
              className="grid grid-cols-2 gap-2 text-gray-800 font-bold  data bg-white rounded-lg shadow-md p-4  w-full 
            "
            >
              <li>Type:  {typePokemonIcons.length > 0 && typePokemonIcons.join(' ')}{pokemon.type.join(", ")}</li>
              <li>S-Attack: {pokemon.base["Sp. Attack"]}</li>
              <li>S-Defense: {pokemon.base["Sp. Defense"]}</li>
              <li>Attack: {pokemon.base.Attack}</li>
              <li>Defense: {pokemon.base.Defense}</li>
              <li>Speed: {pokemon.base.Speed}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
