import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import PokemonDefault from "./PokemonDefault";
import BeatLoader from "react-spinners/BeatLoader";
import Search from "./Search";

export default function Pokemon({ number, selectedPokemon, index }) {
  const {
    pokeList,
    setSelectedPokemon1,
    selectedPokemon2,
    setSelectedPokemon2,
    setIndexPok1,
    setIndexPok2,
  } = useContext(DataContext);
  const pokemon = Math.floor(Math.random() * pokeList.length);
  // const pokemon = searched.id;
  const [selected, setSelected] = useState(false);

  return !selectedPokemon ? (
    // Unselected State
    // cursor-pointer flex justify-center items-center flex-col
    <div className="Pokemon bg-gray-100">
      <PokemonDefault
        selectHandler={() => {
          // setSelected(true);
          if (number === "one") {
            setSelectedPokemon1(true);
            setIndexPok1(pokemon);
          } else {
            console.log(selectedPokemon2);
            setSelectedPokemon2(true);
            setIndexPok2(pokemon);
          }
        }}
      />
    </div>
  ) : (
    // Selected Pokemon
    //  flex flex-col justify-center items-center
    <div className="Pokemon bg-gray-100">
      <div className="">
        <Search />
        <h3 className="text-2xl font-bold mb-4 text-center bg-slate-500 text-white rounded-lg p-2  w-full">
          {pokeList[index == null ? pokemon : index].name.english}
        </h3>
      </div>
      <PokeImage
        pokemon={pokeList[index == null ? pokemon : index]}
        number={number}
      />
      <PokeHealth pokemon={pokeList[index == null ? pokemon : index]} />
      <PokeData pokemon={pokeList[index == null ? pokemon : index]} />
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

//  ---------------------------------------------------function for Imagechange
let counter = 0;

function changeImg(pokeImg, number) {
  if (pokeImg.length == 0) {
    return;
  }

  let img = document.getElementsByName(`img-${number}`);

  try {
    img[0].src = pokeImg[counter];
  } catch (error) {}

  counter != 3 ? counter++ : (counter = 0);
}

//  --------------------------------------------------- component PokeImage
function PokeImage({ pokemon, number }) {
  const [pokeImg, setPokeImg] = useState([]);
  const [loading, setLoading] = useState(true);

  setInterval(() => {
    changeImg(pokeImg, number);
  }, 2000);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();
      console.log(data);
      setPokeImg([
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny,
        data.sprites.back_default,
      ]);
      setLoading(false);
    };
    getApiData();
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
          name={`img-${number}`}
          src={pokeImg[counter]}
          alt={pokemon.name.english}
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

//  --------------------------------------------------- component PokeData

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
    <div className="PokeData">
      <ul className="grid grid-cols-2 gap-2 text-gray-800 font-bold rounded-lg bg-slate-200 p-2">
        <li><span>Type: </span>{pokemon.type.join(", ")}</li>
        <li><span>S-Attack:</span> {pokemon.base["Sp. Attack"]}</li>
        <li><span>S-Defense:</span> {pokemon.base["Sp. Defense"]}</li>
        <li><span>Attack:</span> {pokemon.base.Attack}</li>
        <li><span>Defense:</span> {pokemon.base.Defense}</li>
        <li><span>Speed:</span> {pokemon.base.Speed}</li>
      </ul>
    </div>
  );
}
