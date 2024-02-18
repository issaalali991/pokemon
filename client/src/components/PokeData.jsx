import { useContext } from "react";
import { DataContext } from "../contexts/PokemonContext";

export default function PokeData({ pokemon, typePokemonIcons }) {
  const { searched } = useContext(DataContext);

  return (
    <div className="PokeData">
      <ul className="grid grid-cols-2 gap-2 text-gray-800 font-bold rounded-lg bg-slate-200 p-2">
        <li className="row-span-3 gap-2 flex flex-col ">
          <div className="pdataTxt gap-2 flex flex-col">🇹 Type:</div>
          {typePokemonIcons.length == 0 && <div></div>}
          {typePokemonIcons.length == 2 && (
            <div>
              <div className="pl-6">
                <b className="text-2xl">{typePokemonIcons[0]}</b>{" "}
                {pokemon.type[0]}
              </div>
              <div className="pl-6">
                <b className="text-2xl">{typePokemonIcons[1]}</b>{" "}
                {pokemon.type[1]}
              </div>
            </div>
          )}
          {typePokemonIcons.length == 1 && (
            <div>
              <div className="pl-6">
                <b className="text-2xl">{typePokemonIcons[0]}</b>{" "}
                {pokemon.type[0]}
              </div>
            </div>
          )}
        </li>

        <li>
          ⚔️
          <span className="pdataTxt">&nbsp;Attack:</span>
          <span className="underbar">
            <span
              className="barFill"
              style={{ width: `${pokemon.base.Attack / 2}%` }}
            ></span>
            <div className="pInLi">{pokemon.base.Attack}</div>
          </span>
        </li>

        <li>
          🛡️
          <span className="pdataTxt">&nbsp;Defense:</span>
          <span className="underbar">
            <span
              className="barFill"
              style={{ width: `${pokemon.base.Defense / 2}%` }}
            ></span>
            <div className="pInLi">{pokemon.base.Defense}</div>
          </span>
        </li>

        <li>
          🏁
          <span className="pdataTxt">&nbsp;Speed:</span>
          <span className="underbar">
            <span
              className="barFill"
              style={{ width: `${pokemon.base.Speed / 2}%` }}
            ></span>
            <div className="pInLi">{pokemon.base.Speed}</div>
          </span>
        </li>

        <li>
          💥
          <span className="pdataTxt">&nbsp;S-Attack:</span>
          <span className="underbar">
            <span
              className="barFill"
              style={{ width: `${pokemon.base["Sp. Attack"] / 2}%` }}
            ></span>
            <div className="pInLi">{pokemon.base["Sp. Attack"]}</div>
          </span>
        </li>

        <li>
          🔰
          <span className="pdataTxt">&nbsp;S-Defense:</span>
          <span className="underbar">
            <span
              className="barFill"
              style={{ width: `${pokemon.base["Sp. Defense"] / 2}%` }}
            ></span>
            <div className="pInLi">{pokemon.base["Sp. Defense"]}</div>
          </span>
        </li>
      </ul>
    </div>
  );
}
