import { createContext, useEffect, useState } from "react";
import Axios from "axios";
export const DataContext = createContext();

export default function PokemonContextProvider({ children }) {
  // Setze gemeinsame useStates
  const [pokeList, setPokeList] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [searched, setSearched] = useState(0);
  let [pokemon, setPokemon] = useState();
  // State to check if pokemons are selected
  const [selectedPokemonLeft, setSelectedPokemonLeft] = useState(false);
  const [selectedPokemonRight, setSelectedPokemonRight] = useState(false);
  //  ------ set index for selected pokemon ----
  const [indexPok1, setIndexPok1] = useState(null);
  const [indexPok2, setIndexPok2] = useState(null);

  const VITE_APP_API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
  // const VITE_APP_API_BASE_URL = 'http://localhost:3000';

  const [sprites, setSprites] = useState({
    Left: [],
    Right: [],
  });

  // Lade Daten via API in entries
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Axios.get(`${VITE_APP_API_BASE_URL}/pokemon`).then((res) => {
       
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
        selectedPokemonLeft,
        setSelectedPokemonLeft,
        selectedPokemonRight,
        setSelectedPokemonRight,
        searched,
        setSearched,
        indexPok1,
        setIndexPok1,
        indexPok2,
        setIndexPok2,
        pokemon,
        setPokemon,
        sprites,
        setSprites,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
