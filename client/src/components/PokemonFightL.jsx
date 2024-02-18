import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import BeatLoader from "react-spinners/BeatLoader";
import PokeData from "./PokeData";
import { getTypeIcon } from "../utils/utils";

export default function PokemonFightL({ number }) {
  const { pokeList, indexPok1, sprites } = useContext(DataContext);
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
        sprites={sprites.Left}
        setTypePokemonIcons={setTypePokemonIcons}
      />
      <PokeHealth pokemon={pokeList[index]} />
      <PokeData pokemon={pokeList[index]} typePokemonIcons={typePokemonIcons} />
    </div>
  );
}

//  --------------------------------------------------- function for Imagechange

let imageCounterFL = 0;

function changeImg(sprites, number) {

  let img = document.getElementsByName(`img-${number}`);
  img[0].src = sprites[imageCounterFL];
  imageCounterFL < 3 ? imageCounterFL++ : (imageCounterFL = 0);
}

//  -------------------------------------------------------- COMPONENT PokeImage

function PokeImage({ pokemon, sprites, number, setTypePokemonIcons }) {
  const [loading, setLoading] = useState(true);
  const { searched } = useContext(DataContext);

  console.log(sprites);
  let intervalFightL = undefined;

  // start image skipping
  intervalFightL = setInterval(() => {
    changeImg(sprites, number);
  }, 2000);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();

      // setSprites({
      //   Left: [
      //     data.sprites.front_default,
      //     data.sprites.front_shiny,
      //     data.sprites.back_shiny,
      //     data.sprites.back_default,
      //   ],
      // });
      setLoading(false);
      setTypePokemonIcons(
        data.types.map((type) => getTypeIcon(type.type.name))
      );
    };
    getApiData();

    // stop image skipping on unmount
    return () => {
      clearInterval(intervalFightL);
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
          id="pImageFL"
          alt={pokemon.name.english}
          src={sprites[imageCounterFL]}
          className="pImageL w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500"
        />
      )}
    </div>
  );
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
