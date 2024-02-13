import React, { useState, useEffect, useContext } from "react";

import BeatLoader from "react-spinners/BeatLoader";
import { DataContext } from ".././contexts/PokemonContext.jsx";
import Pokemon from "../components/Pokemon.jsx";
import FightButton from "./FightButton.jsx";
import { useNavigate } from "react-router-dom";


function PokeList() {
  const {
    pokeList,
    setPokeList,
    loading,
    setIsLoading,
    selectedPokemon1,
    selectedPokemon2,
    indexPok1,
    indexPok2,
    setIndexPok1,
    setIndexPok2,
  } = useContext(DataContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.localStorage.getItem("indexPok1")!=null
      ? setIndexPok1(window.localStorage.getItem("indexPok1"))
      : setIndexPok1(null);
    window.localStorage.getItem("indexPok2")!=null
      ? setIndexPok2(window.localStorage.getItem("indexPok2"))
      : setIndexPok2(null);
  }, [selectedPokemon1, selectedPokemon2]);
  console.log("indexPok1", indexPok1);
  console.log("indexPok2", indexPok2);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading && (
        <div className="my-4">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-8 text-white  shadow
          "
          >
            Pokefight
          </h1>
          <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
            onClick={() => {
              window.localStorage.clear();
              setIndexPok1(null);
              setIndexPok2(null);

            }
            }
            >
              Restart
            </button>
          <div className="flex justify-around items-center mb-8">
            {/* Left Side Pokemon */}

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
              onClick={() => {
                navigate("/pokemon/1");
              }}
            >
              Choose Player 1
            </button>

            <Pokemon
            key={selectedPokemon1} 
              number={"one"}
              index={indexPok1 == null ? null : indexPok1}
              selectedPokemon={selectedPokemon1}
            />

            <div className="centerDiv">
              {selectedPokemon1 && selectedPokemon2 ? (
                <FightButton />
              ) : (
                <img src="./vs.png" alt="" className="mb-4 w-20 h-20" />
              )}
            </div>
            {/* Right Side Pokemon */}
            <Pokemon
            key={selectedPokemon2} 
              number={"two"}
              index={indexPok2 == null ? null : indexPok2}
              selectedPokemon={selectedPokemon2}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
              onClick={() => {
                navigate("/pokemon/2");
              }}
            >
              Choose Player 2
            </button>
          </div>

          <hr className="my-8" />
        </div>
      )}
    </div>
  );
}

export default PokeList;

// import { useState, useEffect, useContext } from "react";
// import Axios from "axios";
// import BeatLoader from "react-spinners/BeatLoader";

// import { DataContext } from ".././contexts/PokemonContext.jsx";

// import Pokemon from "../components/Pokemon.jsx";

// function PokeList() {
//   const { pokeList, setPokeList, loading, setIsLoading } =
//     useContext(DataContext);
//   console.log("loading", loading);
//   return (
//     <>
//       {loading && <BeatLoader color="#36d7b7" className="my-4" />}
//       {!loading && (
//         <div>
//           <h1>Pokefight</h1>
//           <div className="container">
//             {/* // Left Side Pokemon */}
//             <Pokemon />

//             <div className="centerDiv">
//               <button>
//                 <h3>Fight!</h3>
//               </button>
//               <h1 className="text-3xl font-bold ">
//             VS</h1>
//               {/* <img src="" alt="" /> */}
//               {/* <ul>
//                 {pokeList.map((pokemon) => (
//                   <li key={pokemon.id}>
//                     <h2>
//                       <a href={`/pokemon/${pokemon.id}`}>
//                         {pokemon.name.english}
//                       </a>
//                     </h2>
//                   </li>
//                 ))}
//               </ul> */}
//             </div>
//             {/* // Right Side Pokemon */}
//             <Pokemon />
//           </div>

//           <hr />
//         </div>
//       )}

//       {/* <Pokemon />

//     {loading && <p>Loading...</p>
//     }
//     {!loading && (
//       <div className="PokeList">
//         <h2>PokeList</h2>
//         <ul>
//           {pokeList.map((pokemon) => (
//             <li key={pokemon.id}>

//            <h2>
//               <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</a>
//            </h2>

//             </li>
//           ))}
//         </ul>

//       </div>
//     )

//     }
//         */}
//     </>
//   );
// }

// export default PokeList;
