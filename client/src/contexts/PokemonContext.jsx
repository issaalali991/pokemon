import { createContext, useEffect, useState } from "react";
import Axios from "axios";
export const DataContext = createContext();

export default function PokemonContext({ children }) {
  // Setze gemeinsame useStates
  const [pokeList, setPokeList] = useState(null);
  const [loading, setIsLoading] = useState(true);

  // Lade Daten via API in entries
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await // Axios.get("https://pokemon-9pzm.onrender.com/pokemon").then((res) => {
        Axios.get("http://localhost:3000/pokemon").then((res) => {
          console.log(res.data);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
