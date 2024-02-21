export default function PokemonDefault({ selectHandler }) {
  return (
    <div className="PokemonDefault">
      <div id="DefaultImage" onClick={selectHandler}></div>
    </div>
  );
}
