import React, { useContext, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { DataContext } from ".././contexts/PokemonContext.jsx";
import PokemonFightL from "./PokemonFightL.jsx";
import PokemonFightR from "./PokemonFightR.jsx";
import "./fight.css";
import Pokemon from "../utils/classPokemon.js";

export default function Figtht() {
  const {
    loading,
    pokeList,
    indexPok1,
    indexPok2,
    selectedPokemonL,
    selectedPokemonR,
  } = useContext(DataContext);

  const PokemonL = new Pokemon(pokeList, indexPok1, "L");
  const PokemonR = new Pokemon(pokeList, indexPok2, "R");

  function figthAction(fillL, fillR, markL, markR, HPFillL, HPFillR) {
    PokemonL.setMark(markL);
    PokemonR.setMark(markR);
    PokemonL.setHPFill(HPFillL);
    PokemonR.setHPFill(HPFillR);

    const ivall = setInterval(() => {
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
          PokemonR.takeDamage(PokemonL.attack);
        }
        // R Pokemon Attacks
        if (PokemonR.aTime >= 100) {
          PokemonR.aTime = 0;
          reduceHP(PokemonL);
          PokemonL.takeDamage(PokemonR.attack);
        }
        if (PokemonL.hp <= 0 || PokemonR.hp <= 0) {
          clearInterval(ivall);
        }
      }
    }, 35);
  }

  function reduceHP(pokemon) {
    pokemon.triggerMark();
    setTimeout(() => {
      pokemon.triggerMark();
    }, 300);
    // wait(1000);
  }

  function wait(ms) {
    var start = Date.now(),
      now = start;
    while (now - start < ms) {
      now = Date.now();
    }
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

          <div id="ActionContainer">
            <img src="./vs.svg" alt="" className="mb-4 w-40 h-40" />
            Attack
            <div id="TimeContainer">
              <div id="timebarL" className="timebar">
                <div id="TFillL"></div>
              </div>
              <div id="timebarR" className="timebar">
                <div id="TFillR"></div>
              </div>
            </div>
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
