import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/PokemonContext";
import BeatLoader from "react-spinners/BeatLoader";
import PokeData from "./PokeData";
import { getTypeIcon } from "../utils/utils";

export default function PokemonFightR({}) {
  const { pokeList, indexPok2, sprites } = useContext(DataContext);
  let index = indexPok2;

  const [typePokemonIcons, setTypePokemonIcons] = useState("");

  return (
    <div id="PR" className="Pokemon bg-gray-100">
      <div id="statsR">
        <div id="ATTR" className="value">
          ATT
        </div>
        <div id="DEFR" className="value">
          DEF
        </div>
        <div id="DMGR" className="value">
          DMG
        </div>
      </div>
      <img id="MarkR" src="/clawmark.svg" alt="" />
      <img id="VictoryR" src="./victory.svg" alt="" />
      <div className="">
        <h3 className="text-2xl font-bold text-center bg-rose-500 text-white rounded-lg p-2  w-full">
          {pokeList[index].name.english}
        </h3>
      </div>
      <PokeImage
        pokemon={pokeList[index]}
        sprites={sprites.Right}
        setTypePokemonIcons={setTypePokemonIcons}
      />
      <PokeHealth pokemon={pokeList[index]} />
      <PokeData pokemon={pokeList[index]} typePokemonIcons={typePokemonIcons} />
    </div>
  );
}

//  ---------------------------------------------------function for Imagechange

let imageCounterFR = 0;

function changeImg(sprites) {
  try {
    let img = document.getElementById("pImageFR");
    img.src = sprites[imageCounterFR];
  } catch (error) {
    console.log("PFRight-Error", error.message);
  }
  imageCounterFR < 3 ? imageCounterFR++ : (imageCounterFR = 0);
}

//  -------------------------------------------------------- COMPONENT PokeImage

let intervalFightR = undefined;

function PokeImage({ pokemon, sprites, setTypePokemonIcons }) {
  const [loading, setLoading] = useState(true);

  // start image skipping
  clearInterval(intervalFightR);
  intervalFightR = setInterval(() => {
    changeImg(sprites);
  }, 2000);

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const data = await response.json();

      // setSprites({
      //   Left: sprites.Left,
      //   Right: [
      //     data.sprites.front_default,
      //     data.sprites.back_default,
      //     data.sprites.front_shiny,
      //     data.sprites.back_shiny,
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
      clearInterval(intervalFightR);
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
          id="pImageFR"
          alt={pokemon.name.english}
          src={sprites[imageCounterFR]}
          className="pImageR w-60 h-60 mx-auto object-cover rounded-full border-4 border-green-500"
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
        <div id="HPFillR"></div>
        <span id="HPTextR" className="HPText">
          {pokemon.base.HP} / {pokemon.base.HP}
        </span>
      </div>
    </div>
  );
}
