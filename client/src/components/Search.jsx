import { useContext, useState, useEffect } from "react";
import { DataContext } from ".././contexts/PokemonContext.jsx";

function Search() {
  const { searched, setSearched, pokeList ,setPokemon } = useContext(DataContext);
  const [textToSearch, setTextToSearch] = useState("");

  let found = undefined;
  let id = Math.floor(Math.random() * 50)+1;

  found = pokeList.find(
    (item) => item.name.english.toLowerCase() === textToSearch.toLowerCase()
  );

  try {
    id = found.id;
    id--;
  } catch (error) {
    console.log(error);
  }
  setSearched(id);
  useEffect(() => {
    setPokemon(id);
  }, [searched]);


  return (
    <div className="mb-2 border border-r">
      <input className="sInput"
        type="text"
        placeholder="Search a Pokemon..."
        onChange={(e) => setTextToSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
