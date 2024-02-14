import { createContext, useEffect, useState } from "react";
import Axios from "axios";
export const DataContext = createContext();

export default function PokemonContextProvider({ children }) {
  // Setze gemeinsame useStates
  const [pokeList, setPokeList] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [searched, setSearched] = useState("");
  // State to check if pokemons are selected
  const [selectedPokemon1, setSelectedPokemon1] = useState(false);
  const [selectedPokemon2, setSelectedPokemon2] = useState(false);
//  ------ set index for selected pokemon ----
  const [indexPok1, setIndexPok1] = useState(null);
  const [indexPok2, setIndexPok2] = useState(null);



  // Lade Daten via API in entries
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await // Axios.get("https://pokemon-9pzm.onrender.com/pokemon").then((res) => {
        Axios.get("http://localhost:3000/pokemon").then((res) => {
          // console.log(res.data);
          setPokeList(res.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
 

  return (
    <DataContext.Provider
      value={{
        pokeList,
        setPokeList,
        loading,
        setIsLoading,
        selectedPokemon1,
        setSelectedPokemon1,
        selectedPokemon2,
        setSelectedPokemon2,
        searched,
        setSearched,
        indexPok1,
        setIndexPok1,
        indexPok2,
        setIndexPok2,
      
      
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
