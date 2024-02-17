import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import PokemonDefault from "./PokemonDefault";
import BeatLoader from "react-spinners/BeatLoader";
import Search from "./Search";
import PokeData from "./PokeData";

export default function PokemonLeft({ number, index }) {
  const {
    pokeList,
    setSelectedPokemonLeft,
    selectedPokemonLeft,
    setIndexPok1,
    pokemon,
    setPokemon,
    searched,
  } = useContext(DataContext);

  const [selected, setSelected] = useState(false);
  const [, forceUpdate] = useState();
  const [typePokemonIcons, setTypePokemonIcons] = useState("");

  useEffect(() => {
    // forceUpdate(Math.random());
    setPokemon(searched);
    index = pokemon;
  }, []);

  return !selectedPokemonLeft ? (
    // Unselected State
    // cursor-pointer flex justify-center items-center flex-col
    <div className="Pokemon bg-gray-100">
      <Search />
      <PokemonDefault
        selectHandler={() => {
          setSelectedPokemonLeft(true);
          setIndexPok1(pokemon);
        }}
      />
    </div>
  ) : (
    // Selected Pokemon
    //  flex flex-col justify-center items-center
    <div className="Pokemon bg-gray-100">
      <div className="">
        <h3 className="text-2xl font-bold mb-4 text-center bg-slate-500 text-white rounded-lg p-2  w-full">
          {pokeList[index == null ? pokemon : index].name.english}
        </h3>
      </div>
      <PokeImage
        pokemon={pokeList[index == null ? pokemon : index]}
        number={number}
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

let counterLeft = 0;

function changeImg(pokeapi, number) {
  if (pokeapi.length == 0) {
    return;
  }

  let img = document.getElementsByName(`img-${number}`);

  try {
    img[0].src = pokeapi[counterLeft];
  } catch (error) {}

  counterLeft < 3 ? counterLeft++ : (counterLeft = 0);
}

//  --------------------------------------------------- component PokeImage
function PokeImage({ pokemon, number, typePokemonIcons, setTypePokemonIcons }) {
  const [pokeapi, setpokeApi] = useState({});
  const [loading, setLoading] = useState(true);
  const { searched } = useContext(DataContext);

  const getTypeIcon = (type) => {
    const typeIcons = {
      normal: "👊",
      fire: "🔥",
      water: "💧",
      electric: "⚡",
      grass: "🌱",
      ice: "❄️",
      fighting: "🥊",
      poison: "☠️",
      ground: "🏜️",
      flying: "🕊️",
      psychic: "🔮",
      bug: "🐞",
      rock: "🪨",
      ghost: "👻",
      dragon: "🐉",
      dark: "🌑",
      steel: "🛡️",
      fairy: "🧚",
    };

    return typeIcons[type] || "❓";
  };
  let ivall = undefined;

  // start image skipping
  ivall = setInterval(() => {
    // console.log(number, counterLeft);
    changeImg(pokeapi, number);
  }, 2000);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();

      setpokeApi({});
      setpokeApi([
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny,
        data.sprites.back_default,
      ]);
      setLoading(false);
      setTypePokemonIcons(
        data.types.map((type) => getTypeIcon(type.type.name))
      );
    };
    getApiData();

    // stop image skipping on unmount
    return () => {
      clearInterval(ivall);
    };
  }, []);

  return searched !== 0 ? (
    <div className="PokeImage flex justify-center items-center flex-col">
      {loading && (
        <BeatLoader
          color="#22C55E"
          className="my-4 flex w-60 h-52 flex-row justify-center items-center"
        />
      )}
      {!loading && (
        <img
          name={`img-${number}`}
          src={pokeapi[counterLeft]}
          alt={pokemon.name.english}
          className="w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500"
        />
      )}
    </div>
  ) : null;
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
