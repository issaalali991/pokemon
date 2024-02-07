import PokeList from "./components/PokeList"
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path="/pokemon/:id " element={<PokeList entries={entries} />} />
        <Route path="/pokemon/:id/:info " element={<PokeList />} /> 
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <PokeList />
        </Routes>
    </>
  )
}

export default App
