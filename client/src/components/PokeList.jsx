import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

import { DataContext } from ".././contexts/PokemonContext.jsx";

import Pokemon from "../components/Pokemon.jsx";



function PokeList() {
  const { pokeList, setPokeList, loading, setIsLoading } = useContext(
    DataContext
  );

  return (
    <div className="flex flex-col justify-center items-center h-screen">
     
      {loading && (
        <div className="my-4">
          <BeatLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-white  shadow
          ">Pokefight</h1>      
          <div className="flex justify-around items-center mb-8">
            {/* Left Side Pokemon */}
            <Pokemon />

            <div className="centerDiv">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">
                <h3 className="text-2xl font-bold
                ">Fight!</h3>
               
              </button>
              <img src="./vs.png" alt=""  className="mb-4 w-20 h-20"/>
             
            </div>

            {/* Right Side Pokemon */}
            <Pokemon />
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
