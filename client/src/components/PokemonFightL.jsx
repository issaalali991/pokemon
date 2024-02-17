import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import BeatLoader from "react-spinners/BeatLoader";

export default function PokemonFightL({ number }) {
  const { pokeList, indexPok1 } = useContext(DataContext);
  const pok1 = pokeList && pokeList[indexPok1];
  let index = indexPok1;

  return (
    <div id="PL" className="Pokemon bg-gray-100">
      <img id="MarkL" src="./clawmark.svg" alt="" />
      <div className="">
        <h3 className="text-2xl font-bold mb-4 text-center bg-slate-500 text-white rounded-lg p-2  w-full">
          {pokeList[index].name.english}
        </h3>
      </div>
      <PokeImage pokemon={pokeList[index]} number={number} />
      <PokeHealth pokemon={pokeList[index]} />
      <PokeData pokemon={pokeList[index]} />
    </div>
  );
}

//  ---------------------------------------------------function for Imagechange

let counterFL = 0;

function changeImg(pokeImg, number) {
  if (pokeImg.length == 0) {
    return;
  }

  let img = document.getElementsByName(`img-${number}`);

  try {
    img[0].src = pokeImg[counterFL];
  } catch (error) {}

  counterFL < 3 ? counterFL++ : (counterFL = 0);
}

//  --------------------------------------------------- component PokeImage
function PokeImage({ pokemon, number }) {
  const [pokeImg, setPokeImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searched } = useContext(DataContext);

  let intervall = undefined;

  // start image skipping
  intervall = setInterval(() => {
    // console.log(number, counterFL);
    changeImg(pokeImg, number);
  }, 2000);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();

      setPokeImg([]);
      setPokeImg([
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_shiny,
        data.sprites.back_default,
      ]);
      setLoading(false);
    };
    getApiData();

    // stop image skipping on unmount
    return () => {
      clearInterval(intervall);
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
          src={pokeImg[counterFL]}
          alt={pokemon.name.english}
          className="w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500"
        />
      )}
    </div>
  ) : null;
}

//  --------------------------------------------------- component PokeHealth

function PokeHealth({ pokemon }) {
  return (
    <div className="PokeHealth">
      <div className="HPContainer">
        <div id="HPFillL"></div>
        <span id="HPTextL" className="HPText">HP: {pokemon.base.HP}</span>
      </div>
    </div>
  );
}

//  --------------------------------------------------- component PokeData

function PokeData({ pokemon }) {
  const { searched } = useContext(DataContext);
  return searched !== 0 ? (
    <div className="PokeData">
      <ul className="grid grid-cols-2 gap-2 text-gray-800 font-bold rounded-lg bg-slate-200 p-2">
        <li>
          <div className="type">Type: </div>
          {pokemon.type.join(", ")}
        </li>
        <li>
          <span>S-Attack:</span> {pokemon.base["Sp. Attack"]}
        </li>
        <li>
          <span>S-Defense:</span> {pokemon.base["Sp. Defense"]}
        </li>
        <li>
          <span>Attack:</span> {pokemon.base.Attack}
        </li>
        <li>
          <span>Defense:</span> {pokemon.base.Defense}
        </li>
        <li>
          <span>Speed:</span> {pokemon.base.Speed}
        </li>
      </ul>
    </div>
  ) : null;
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
