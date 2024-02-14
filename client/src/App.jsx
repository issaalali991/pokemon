import { Routes, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import ChoosePokemon from "./components/Card/ChoosePokemon";

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
      className={`App bg-gray-200 p-4 rounded-lg shadow-md text-center flex flex-col justify-center items-center ${bgImage} bg-cover bg-center bg-no-repeat`}
    >
      <Routes>
        <Route path="/" element={<PokeList />} />
        <Route path="/pokemon/" element={<ChoosePokemon />} />
        <Route path="/pokemon/:id" element={<ChoosePokemon />} />
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

      {/* <p>Footer</p> */}
    </div>
  );
}
