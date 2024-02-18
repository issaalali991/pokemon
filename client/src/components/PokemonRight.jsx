import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import PokemonDefault from "./PokemonDefault";
import BeatLoader from "react-spinners/BeatLoader";
import Search from "./Search";
import PokeData from "./PokeData";
import { getTypeIcon } from "../utils/utils";

export default function PokemonRight({ index }) {
  const {
    pokeList,
    selectedPokemonRight,
    setSelectedPokemonRight,
    setIndexPok2,
    pokemon,
    setPokemon,
    searched,
  } = useContext(DataContext);

  const [typePokemonIcons, setTypePokemonIcons] = useState("");
  useEffect(() => {
    setPokemon(searched);
    index = pokemon;
  }, []);

  return !selectedPokemonRight ? (
    // Unselected State
    <div className="Pokemon bg-gray-100">
      <Search />
      <PokemonDefault
        selectHandler={() => {
          setSelectedPokemonRight(true);
          setIndexPok2(pokemon);
        }}
      />
    </div>
  ) : (
    // Selected Pokemon
    <div className="Pokemon bg-gray-100">
      <div className="">
        <h3 className="text-2xl font-bold mb-4 text-center bg-slate-500 text-white rounded-lg p-2  w-full">
          {pokeList[index == null ? pokemon : index].name.english}
        </h3>
      </div>
      <PokeImage
        pokemon={pokeList[index == null ? pokemon : index]}
        typePokemonIcons={typePokemonIcons}
        setTypePokemonIcons={setTypePokemonIcons}
      />
      <PokeHealth pokemon={pokeList[index == null ? pokemon : index]} />
      <PokeData
        pokemon={pokeList[index == null ? pokemon : index]}
        typePokemonIcons={typePokemonIcons}
      />
    </div>
  );
}

//  ---------------------------------------------------function for Imagechange

let imageCounterR = 0;

function changeImg(sprites) {
  try {
    let img = document.getElementById("pImageR");
    img[0].src = sprites[imageCounterR];
  } catch (error) {
    console.log("PRight-Error", error);
  }
  imageCounterR < 3 ? imageCounterR++ : (imageCounterR = 0);
}

//  -------------------------------------------------------- COMPONENT PokeImage

function PokeImage({ pokemon, setTypePokemonIcons }) {
  const [loading, setLoading] = useState(true);
  const { searched, sprites, setSprites } = useContext(DataContext);

  let intervalR = undefined;

  // start image skipping
  intervalR = setInterval(() => {
    changeImg(sprites);
  }, 2000);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();

      setSprites({
        Left: sprites.Left,
        Right: [
          data.sprites.front_default,
          data.sprites.back_default,
          data.sprites.front_shiny,
          data.sprites.back_shiny,
        ],
      });
      setLoading(false);
      setTypePokemonIcons(
        data.types.map((type) => getTypeIcon(type.type.name))
      );
    };

    getApiData();

    // stop image skipping on unmount
    return () => {
      clearInterval(intervalR);
    };
  }, []);

  return (
    <div className="PokeImage flex justify-center items-center flex-col">
      {loading && (
        <BeatLoader
          color="#22C55E"
          className="my-4 flex w-60 h-52 flex-row justify-center items-center"
        />
      )}
      {!loading && (
        <img
          id="pImageR"
          alt={pokemon.name.english}
          src={sprites.Right[imageCounterR]}
          className="w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500"
        />
      )}
    </div>
  );
}

//  --------------------------------------------------- component PokeHealth

function PokeHealth({ pokemon }) {
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
    <div className="PokeHealth">
      <div
        className={`bg-green-500 text-white font-bold rounded-full h-12 flex items-center justify-center ${gradientColor}} `}
      >
        HP: {pokemon.base.HP}
      </div>
    </div>
  );
}
