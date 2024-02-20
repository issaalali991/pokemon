import { useContext, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { DataContext } from "../contexts/PokemonContext.jsx";
import PokemonFightL from "./PokemonFightL.jsx";
import PokemonFightR from "./PokemonFightR.jsx";
import "./fight.css";
import Pokemon from "../utils/classPokemon.js";
import { useNavigate } from "react-router-dom";
import { reloadPage } from "../utils/utils.js";

export default function ScreenFight({}) {
  const {
    loading,
    pokeList,
    indexPok1,
    setIndexPok1,
    indexPok2,
    setIndexPok2,
    selectedPokemonL,
    setSelectedPokemonLeft,
    selectedPokemonR,
    setSelectedPokemonRight,
    setSprites,
    sprites,
  } = useContext(DataContext);

  const navigate = useNavigate();

  if (pokeList == null) {
    console.log("navigate!!!!");
    navigate(-1);
  }

  const PokemonL = new Pokemon(pokeList, indexPok1, "L");
  const PokemonR = new Pokemon(pokeList, indexPok2, "R");

  function figthAction(fillL, fillR) {
    const ival = setInterval(() => {
      if (PokemonL.hp <= 0) {
        clearInterval(ival);
        setSprites({
          Left: [
            "../../public/grave.svg",
            "../../public/grave.svg",
            "../../public/grave.svg",
            "../../public/grave.svg",
          ],
          Right: sprites.Right,
        });
      }
      if (PokemonR.hp <= 0) {
        setSprites({
          Left: sprites.Left,
          Right: [
            "../../public/grave.svg",
            "../../public/grave.svg",
            "../../public/grave.svg",
            "../../public/grave.svg",
          ],
        });
        return;
      }
      if (PokemonL.aTime < 100 && PokemonR.aTime < 100) {
        PokemonL.aTime += PokemonL.speed;
        PokemonR.aTime += PokemonR.speed;
        fillL.style.height = `${PokemonL.aTime}%`;
        fillR.style.height = `${PokemonR.aTime}%`;
      } else {
        // L Pokemon Attacks
        if (PokemonL.aTime >= 100) {
          PokemonL.aTime = 0;
          reduceHP(PokemonR);
          PokemonR.takeDamageFromm(PokemonL, setSprites);
        }
        // R Pokemon Attacks
        if (PokemonR.aTime >= 100) {
          PokemonR.aTime = 0;
          reduceHP(PokemonL);
          PokemonL.takeDamageFromm(PokemonR, setSprites);
        }
      }
    }, 35);
  }

  function reduceHP(pokemon) {
    pokemon.triggerMark();
    setTimeout(() => {
      pokemon.triggerMark();
    }, 300);
  }

  useEffect(() => {
    const fillL = document.getElementById("TFillL");
    const fillR = document.getElementById("TFillR");
    figthAction(fillL, fillR);
  }, []);

  return (
    <div className="h-screen">
      {loading && (
        <div className="my-4">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <div className="flex flex-row justify-center items-center">
          {/* POKEMON L SIDE  */}

          <PokemonFightL
            number={"one"}
            index={indexPok1 == null ? null : indexPok1}
            selectedPokemon={selectedPokemonL}
          />
          <div className="centerDiv">
            <div id="ActionContainer">
              <img src="./vs.svg" alt="" className="mb-4 w-40 h-40" />
              <div id="TimeContainer">
                <div id="timebarL" className="timebar">
                  <div id="TFillL"></div>
                </div>
                <div id="timebarR" className="timebar">
                  <div id="TFillR"></div>
                </div>
              </div>
            </div>
            <button
              className="text-2xl font-bold mb-4 text-center bg-slate-700 text-white   rounded-lg p-2 border-2 border-slate-500  w-40 h-20  bg-opacity-50  hover:bg-opacity-100  hover:bg-slate-500  hover:text-white  cursor-pointer w-72 mt-4"
              onClick={async () => {
                setIndexPok1(null);
                setIndexPok2(null);

                setSelectedPokemonLeft(false);
                setSelectedPokemonRight(false);
                setSprites({
                  Left: [],
                  Right: [],
                });
                reloadPage();
              }}
            >
              Restart
            </button>
          </div>

          {/* POKEMON RIGHT SIDE  */}

          <PokemonFightR
            number={"two"}
            index={indexPok2 == null ? null : indexPok2}
            selectedPokemon={selectedPokemonR}
          />
        </div>
      )}
    </div>
  );
}
