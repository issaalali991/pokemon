import { useContext, useState, useEffect } from "react";
import { DataContext } from ".././contexts/PokemonContext.jsx";

function Search() {
  const { searched, setSearched, pokeList } = useContext(DataContext);

  console.log(`searched:(${searched})`);
  let found = undefined;
  let id = undefined;

  found = pokeList.find(
    (item) => item.name.english.toLowerCase() == searched.toLowerCase()
  );

  try {
    id = found.id;
  } catch (error) {
    console.log(error);
  }
  console.log("id from search", id);

  return (
    <div className="mb-2 border border-red-500 border-r">
      <input
        type="text"
        placeholder="Search a Pokemon..."
        onChange={(e) => setSearched(e.target.value)}
      />
    </div>
  );
}

export default Search;
