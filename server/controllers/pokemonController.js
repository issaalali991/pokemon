import pokemon from "../db/pokemon.json" with {type: "json"};

export const getAllPokemon = (req, res) => {

  res.json(pokemon)
}

export const getPokemonByID = (req, res) => {
  const id = req.params.id;
  const foundPokemon = pokemon.find((p) => p.id === id)

  res.json(foundPokemon)
}

export const getPokemonInfoByID = (req, res) => {
  const id = req.params.id;
  const info = req.params.info;

  const index = pokemon.findIndex((p) => p.id === id);
  const values = {
    name: pokemon[id].name.english,
    base: pokemon[id].base
  }

  res.json(values)
}