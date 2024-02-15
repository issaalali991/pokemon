import React, { useContext, useState } from "react";
import { DataContext } from "../../contexts/PokemonContext";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";

function ChoosePokemon() {
  const {
    pokeList,
    setSelectedPokemonLeft,
    setSelectedPokemonRight,
    setIndexPok1,
    setIndexPok2,
  } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokselected, setPokselected] = useState(1);
  const navigate = useNavigate();

  // ------get id from url -----
  const { id } = useParams();

  const itemsPerPage = 13;
  // const totalPages = Math.ceil((pokeList && pokeList.length) / itemsPerPage);

  const [filtered, setFiltered] = useState(pokeList);
  // const [filteredList, setFilteredList] = useState(pokeList.slice(indexOfFirstEntry, indexOfLastEntry));
  const indexOfLastEntry = currentPage * itemsPerPage;
  const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
  const displayedEntries = (filtered && filtered.length > 0 && filtered.slice(indexOfFirstEntry, indexOfLastEntry)) || [];

  const totalPages = Math.ceil((filtered && filtered.length) / itemsPerPage);



  return (
    <div
      className="flex  justify-center items-center h-screen 
"
    >
      {pokeList && <PokemonCard pokemon={pokeList[pokselected]} />}

      <div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
          onClick={() => {
            // setIndex(pokselected);
            if (id === "1") {
              setSelectedPokemonLeft(pokselected);
              setIndexPok1(pokselected);
              // console.log(pokselected);
              // window.localStorage.setItem("indexPok1", pokselected);
            } else {
              setSelectedPokemonRight(pokselected);
              setIndexPok2(pokselected);
              // console.log(pokselected);
              // window.localStorage.setItem("indexPok2", pokselected);
            }

            navigate("/");
          }}
        >
          Choose
        </button>
      </div>
      <div
        className="bg-gray-100 p-4 rounded-lg shadow-md text-center  w-full h-full ml-36
    "
      >
        <h1 className="text-4xl font-bold mb-8  shadow ">
          Choose your Pokemon
        </h1>
        <table
          className="table-auto w-full text-center
      "
        >
          <input
            type="text"
            placeholder="search.."
            className=" w-1/2 p-2 rounded-lg mb-4
        text-center"
        onChange={(e) => {
          setFiltered(
            pokeList.filter((pokemon) =>
              pokemon.name.english
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            )
          );
          console.log(filtered); // Hier sollte filtered aktualisiert sein
        }}
          />
          {displayedEntries &&
            displayedEntries.map((pokemon) => (
              <>
                <tr key={pokemon.id}>
                  <td
                    onClick={() => {
                      setPokselected(pokemon.id - 1);
                      console.log(pokemon.id);
                    }}
                    className="cursor-pointer"
                  >
                    {pokemon.name.english}
                  </td>
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
