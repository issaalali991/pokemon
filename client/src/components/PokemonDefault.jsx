export default function PokemonDefault({ selectHandler }) {
  return (
    <div className="PokemonDefault">
      <div className="DefaultImage" onClick={selectHandler}></div>
    </div>
  );
}
