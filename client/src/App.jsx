import { Routes, Route } from "react-router-dom";
import PokeList from "./components/PokeList";

export default function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/pokemon/ " element={<PokeList />} />
      </Routes> */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <PokeList />
      <p>Footer</p>
    </>
  );
}
