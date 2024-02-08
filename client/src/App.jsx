import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import PokeList from "./components/PokeList";
import PokemonContext from "./contexts/PokemonContext.jsx";

export default function App() {
  const { loading } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Routes>
            <Route path="/pokemon/ " element={<PokeList />} />
          </Routes>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <PokeList />
        </>
      )}
      <p>Footer</p>
    </>
  );
}
