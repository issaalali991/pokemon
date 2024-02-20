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

    sprites,
  } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokselected, setPokselected] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the popup
  const navigate = useNavigate();

  // ------get id from url -----
  const { id } = useParams();

  const itemsPerPage = 15;
  const [filtered, setFiltered] = useState(pokeList);
  const indexOfLastEntry = currentPage * itemsPerPage;
  const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
  const displayedEntries =
    (filtered &&
      filtered.length > 0 &&
      filtered.slice(indexOfFirstEntry, indexOfLastEntry)) ||
    [];

  const totalPages = Math.ceil((filtered && filtered.length) / itemsPerPage);

  const handleChooseButtonClick = () => {
    if (id === "1") {
      setSelectedPokemonLeft(pokselected);
      setIndexPok1(pokselected);
    } else {
      setSelectedPokemonRight(pokselected);
      setIndexPok2(pokselected);
    }

    setShowPopup(true);
    navigate("/");
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        {pokeList && <PokemonCard pokemon={pokeList[pokselected]} id={id} />}

        <div className="centerDiv">
          <button
            className="text-2xl font-bold mb-4 text-center bg-rose-500 text-white   rounded-lg p-2 border-2 border-rose-700  h-20  bg-opacity-70  hover:bg-opacity-100  hover:bg-rose-500  hover:text-white  cursor-pointer w-72"
            onClick={handleChooseButtonClick}
            id="chooseButton"
          >
            Choose
          </button>
        </div>
        <div className=" p-4 bg-white rounded-lg shadow-lg" id=" choosePokemon">
          <h1 className="text-4xl font-bold mb-4 shadow text-white bg-rose-500 p-2 rounded-lg">
            Choose your Pokemon
          </h1>
          <table className="table-auto w-full text-center">
            <input
              type="text"
              placeholder="search.."
              className=" w-full p-2 rounded-lg mb-4 text-center text-xl shadow-lg bg-gray-100 border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-gray-500 transition duration-500 ease-in-out hover:border-gray-500"
              onChange={(e) => {
                setFiltered(
                  pokeList.filter((pokemon) =>
                    pokemon.name.english
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                );
              }}
            />
            {displayedEntries &&
              displayedEntries.map((pokemon) => (
                <>
                  <tr key={pokemon.id}>
                    <td
                      onClick={() => {
                        setPokselected(pokemon.id - 1);
                        // console.log(pokemon.id);
                        this.classList.add(
                          "bg-gray-200",
                          "transition",
                          "duration-500",
                          "ease-in-out"
                        );
                      }}
                      className="cursor-pointer hover:bg-gray-200 transition duration-500 ease-in-out p-1.5 shadow-lg border-2 border-gray-200  hover:border-gray-500  rounded-lg  w-1/2 text-lg"
                    >
                      {pokemon.name.english}
                      {" - HP="}
                      {pokemon.base.HP}
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
    </div>
  );
}

export default ChoosePokemon;
