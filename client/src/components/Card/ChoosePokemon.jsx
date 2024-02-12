import React, { useContext, useState } from "react";
import { DataContext } from "../../contexts/PokemonContext";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";


function ChoosePokemon() {
  const { pokeList } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokselected, setPokselected] = useState(1);
  const navigate = useNavigate();


  const itemsPerPage = 13;
  const totalPages = Math.ceil((pokeList && pokeList.length) / itemsPerPage);

  const indexOfLastEntry = currentPage * itemsPerPage;
  const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
  const displayedEntries = (pokeList && pokeList.slice(indexOfFirstEntry, indexOfLastEntry)) || [];

  return (
<div className="flex  justify-center items-center h-screen 
">
  {pokeList && <PokemonCard pokemon={pokeList[pokselected]} 
  />
  
  }
  {
    console.log(pokselected)
  }
 

    <div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
      >
        Choose
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center  w-full h-full ml-36
    " >
      <h1 className="text-4xl font-bold mb-8  shadow "
      >Choose your Pokemon</h1>
      <table className="table-auto w-full text-center
      "
      >
        {displayedEntries.map((pokemon) => (
          <>
            <tr key={pokemon.id}>
              <td 
              onClick={() => {
                setPokselected(pokemon.id);
                console.log(pokemon.id);
               
              }} className="cursor-pointer"
              >{pokemon.name.english}</td>
            </tr>
         </>
        ))}
      </table>
      <ResponsivePagination
        total={totalPages}
        current={currentPage}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
 
    </div>
  );
}

export default ChoosePokemon;
