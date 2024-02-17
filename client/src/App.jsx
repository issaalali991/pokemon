import { Routes, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import ChoosePokemon from "./components/Card/ChoosePokemon";
import Figtht from "./components/Figtht";

export default function App() {
  const pool = [
    "bg-[url('/arena0.jpg')]",
    "bg-[url('/arena1.jpg')]",
    "bg-[url('/arena2.jpg')]",
    "bg-[url('/arena3.jpg')]",
    "bg-[url('/arena4.jpg')]",
    "bg-[url('/arena5.jpg')]",
    "bg-[url('/arena6.jpg')]",
    "bg-[url('/arena7.jpg')]",
    "bg-[url('/arena8.jpg')]",
    "bg-[url('/arena9.jpg')]",
  ];
  const selection = Math.floor(Math.random() * 10);

  const bgImage = pool[selection];

  return (
    <div
      id="App"
      className={`App bg-gray-200 p-4 flex flex-col justify-center ${bgImage} bg-cover bg-center bg-no-repeat`}
    >
      <img
        src="../../public/Pokefight.svg"
        alt="Pokefight"
        className="w-3/6 m-8"
      />

      <Routes>
        <Route path="/" element={<PokeList />} />
        <Route path="/pokemon/" element={<ChoosePokemon />} />
        <Route
          path="/pokemon/:id"
          element={<ChoosePokemon />}
        />
        <Route path="/fight" element={<Figtht />} />
      </Routes>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4"
        onClick={() => {
          window.localStorage.clear();
        }}
      >
        Restart
      </button>
    </div>
  );
}
