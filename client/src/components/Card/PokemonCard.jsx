import React, { useContext, useEffect, useMemo, useState } from "react";
import PokeData from "../PokeData";
import { getTypeIcon } from "../../utils/utils";
import { DataContext } from "../../contexts/PokemonContext";

function PokemonCard({ pokemon, id }) {
  const [pokeapi, setpokeApi] = useState({});
  const [loading, setLoading] = useState(true);
  const [typePokemonIcons, setTypePokemonIcons] = useState("");
  const { sprites, setSprites } = useContext(DataContext);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();
      setpokeApi(data);
      setLoading(false);
      setTypePokemonIcons(
        data.types.map((type) => getTypeIcon(type.type.name))
      );

      if (id === "1") {
        setSprites({
          Left: [
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ],
          Right : sprites.Right
        });
      } else {
        setSprites({
          Left : sprites.Left,
          Right: [
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ]
        });
      }
    };
    getApiData();
  }, [pokemon.id]);
  return (
    <div className=" card">
      <div className=" ">
        <div className="flex justify-center items-center flex-col ">
          <h3 className="text-2xl font-bold mb-4 text-center bg-slate-500 text-white size-fit  rounded-lg p-2  w-full">
            {pokemon.name.english}
          </h3>
        </div>
        <img
          src={id === "1" ? sprites.Left[0] : sprites.Right[0]}
          alt=""
          className="w-80 h-80 m-0 p-0 rounded-full bg-white border-4 border-slate-500 shadow-md mx-auto
          "
        />
        <PokeData pokemon={pokemon} typePokemonIcons={typePokemonIcons} />
      </div>
    </div>
  );
}

export default PokemonCard;
