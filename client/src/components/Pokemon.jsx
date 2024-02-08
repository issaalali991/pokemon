import React from "react";

export default function Pokemon() {
  return (
    <div className="Pokemon">
      <h3>Pokemon</h3>
      <PokeImage />
      <PokeData />
    </div>
  );
}

function PokeData() {
  return <div className="PokeData">PokeData</div>;
}

function PokeImage() {
  return (
    <div className="PokeImage">
      <img src="" alt="" />
    </div>
  );
}
