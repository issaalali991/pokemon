import { useContext, useEffect, useRef } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { DataContext } from "../contexts/PokemonContext.jsx";
import PokemonFightL from "./PokemonFightL.jsx";
import PokemonFightR from "./PokemonFightR.jsx";
import "./fight.css";
import Pokemon from "../utils/classPokemon.js";
import { reloadPage } from "../utils/utils.js";
import Axios from "axios";

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

  if (pokeList == null) {
    reloadPage();
  }

  const PokemonL = new Pokemon(pokeList, indexPok1, "L");
  const PokemonR = new Pokemon(pokeList, indexPok2, "R");

  let score = {
    name_won: "",
    name_los: "",
    turns: 0,
    has_won: 0,
  };

  async function sendScore(score) {
    console.log(JSON.stringify(score));
    const VITE_APP_API_BASE_URL = "http://localhost:3000";
    try {
      await Axios.post(
        `${VITE_APP_API_BASE_URL}/pokemon/mongo`,
        score
        
      ).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function figthAction(fillL, fillR) {
    let turns = 0;

    const ival = setInterval(() => {
      if (PokemonL.hp <= 0) {
        score = {
          name_won: PokemonR.name,
          name_los: PokemonL.name,
          turns: turns,
          has_won: 1,
        };
        sendScore(score);
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
        document.getElementById("restartButton").style.visibility = "visible";
        document.getElementById("VictoryR").style.opacity = 1;
        return;
      }
      if (PokemonR.hp <= 0) {
        score = {
          name_won: PokemonL.name,
          name_los: PokemonR.name,
          turns: turns,
          has_won: 1,
        };
        sendScore(score);
        clearInterval(ival);
        setSprites({
          Left: sprites.Left,
          Right: [
            "../../public/grave.svg",
            "../../public/grave.svg",
            "../../public/grave.svg",
            "../../public/grave.svg",
          ],
        });
        document.getElementById("restartButton").style.visibility = "visible";
        document.getElementById("VictoryL").style.opacity = 1;
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
          turns++;
        }
        // R Pokemon Attacks
        if (PokemonR.aTime >= 100) {
          PokemonR.aTime = 0;
          reduceHP(PokemonL);
          PokemonL.takeDamageFromm(PokemonR, setSprites);
          turns++;
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
              id="restartButton"
              className="text-2xl font-bold mb-4 text-center bg-red-900 text-white   rounded-lg p-2 border-2 border-rose-700 h-20  bg-opacity-70  hover:bg-opacity-100  hover:bg-rose-500  hover:text-white  cursor-pointer w-72 mt-4"
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
