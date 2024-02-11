import { Routes, Route } from "react-router-dom";
import PokeList from "./components/PokeList";

export default function App() {

  return ( 
    <div id="App"  className="App bg-gray-200 p-4 rounded-lg shadow-md text-center flex flex-col justify-center items-center bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat
    "
    >
      {/* <Routes>
        <Route path="/pokemon/ " element={<PokeList />} />
      </Routes> */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <PokeList />
      {/* <p>Footer</p> */}
    </div>
  );
}
