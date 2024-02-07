import React, { useState, useEffect } from "react";
import Axios from "axios";


function PokeList() {
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
    try {
      const result = Axios.get("http://localhost:3000/pokemon").then((res) => {
        console.log(res.data);
        setPokeList(res.data);
      });
    } catch (error) {
      console.log("Error: " + error);
    }
  }, []);

  return <div></div>;
}

export default PokeList;
