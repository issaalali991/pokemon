// import pokemon from "../db/pokemon.json" with {type: "json"};
import pokemon from "../db/pokemon.js";

export const getAllPokemon = (req, res) => {

  res.json(pokemon)
}

export const getPokemonByID = (req, res) => {
  const id = req.params.id;
  const foundPokemon = pokemon.find((p) => p.id == id)

  res.json(foundPokemon)
}

export const getPokemonInfoByID = (req, res) => {
  const id = req.params.id;
  const info = req.params.info;

  const index = pokemon.findIndex((p) => p.id == id);

  console.log(index);

  const values = {
    name: pokemon[index].name.english,
    base: pokemon[index].base
  }

  res.json(values)
}