import React, { useEffect, useMemo, useState } from "react";

function PokemonCard({ pokemon }) {
  const [pokeImg, setPokeImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();
      setPokeImg(data.sprites);
      setLoading(false);
    };
    getApiData();
  }, [pokemon.id]);

  const images = useMemo(() => {
    return pokeImg
      ? [
          pokeImg.front_default,
          pokeImg.back_default,
          pokeImg.front_shiny,
          pokeImg.back_shiny,
        ]
      : [];
  }, [pokeImg]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * images.length);
      setIndex(newIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 w-full h-full p-4 rounded-lg shadow-md text-center mr-36">
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
          className="w-80 h-80 m-0 p-0 rounded-full bg-white border-4"
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
      </div>
    </div>
  );
}

export default PokemonCard;
