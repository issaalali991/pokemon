import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import BeatLoader from "react-spinners/BeatLoader";
import PokeData from "./PokeData";

export default function PokemonFightL({ number }) {
  const { pokeList, indexPok1 } = useContext(DataContext);
  const pok1 = pokeList && pokeList[indexPok1];
  let index = indexPok1;
  const [typePokemonIcons, setTypePokemonIcons] = useState("");

  return (
    <div id="PL" className="Pokemon bg-gray-100">
      <div id="statsL">
        <div id="ATTL" className="value">
          ATT
        </div>
        <div id="DEFL" className="value">
          DEF
        </div>
        <div id="DMGL" className="value">
          DMG
        </div>
      </div>
      <img id="MarkL" src="./clawmark.svg" alt="" />
      <div className="">
        <h3 className="text-2xl font-bold text-center bg-slate-500 text-white rounded-lg p-2  w-full">
          {pokeList[index].name.english}
        </h3>
      </div>
      <PokeImage
        pokemon={pokeList[index]}
        number={number}
        setTypePokemonIcons={setTypePokemonIcons}
      />
      <PokeHealth pokemon={pokeList[index]} />
      <PokeData pokemon={pokeList[index]} typePokemonIcons={typePokemonIcons} />
    </div>
  );
}

//  --------------------------------------------------- function for Imagechange

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

// //  --------------------------------------------------- COMPONENT PokeImage
// function PokeImage({ pokemon, number }) {
//   const [pokeImg, setPokeImg] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { searched } = useContext(DataContext);

//   let intervall = undefined;

//   // start image skipping
//   intervall = setInterval(() => {
//     // console.log(number, counterFL);
//     changeImg(pokeImg, number);
//   }, 2000);

//   useEffect(() => {
//     const getApiData = async () => {
//       const response = await fetch(
//         `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
//       );
//       const data = await response.json();

//       setPokeImg([]);
//       setPokeImg([
//         data.sprites.front_default,
//         data.sprites.front_shiny,
//         data.sprites.back_shiny,
//         data.sprites.back_default,
//       ]);
//       setLoading(false);
//     };
//     getApiData();

//     // stop image skipping on unmount
//     return () => {
//       clearInterval(intervall);
//     };
//   }, []);

//   return searched !== 0 ? (
//     <div className="PokeImage flex justify-center items-center flex-col">
//       {loading && (
//         <BeatLoader
//           color="#22C55E"
//           className="my-4 flex w-60 h-52 flex-row justify-center items-center"
//         />
//       )}
//       {!loading && (
//         <img
//           name={`img-${number}`}
//           src={pokeImg[counterFL]}
//           alt={pokemon.name.english}
//           className="w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500"
//         />
//       )}
//     </div>
//   ) : null;
// }

//  --------------------------------------------------- component PokeImage
let counterLeft = 0;

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

  let intervall = undefined;

  // start image skipping
  intervall = setInterval(() => {
    // console.log(number, counterRight);
    changeImg(pokeapi, number);
  }, 2000);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();

      setpokeApi([]);
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
          src={pokeapi[counterLeft]}
          alt={pokemon.name.english}
          className="pImageL w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500"
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
        <span id="HPTextL" className="HPText">
          {pokemon.base.HP} / {pokemon.base.HP}
        </span>
      </div>
    </div>
  );
}
