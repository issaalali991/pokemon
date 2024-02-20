import pokemonMongo from "../models/pokemon.js";

import pokemon from "../db/pokemon.js";


// ---------- getAllPokemon ------------
export const getAllPokemon = (req, res) => {
  res.json(pokemon);
};


export const getPokemonByID = (req, res) => {
  const id = req.params.id;
  const foundPokemon = pokemon.find((p) => p.id == id);

  res.json(foundPokemon);
};

export const getPokemonInfoByID = (req, res) => {
  const id = req.params.id;
  const info = req.params.info;

  const index = pokemon.findIndex((p) => p.id == id);

  console.log(index);

  const values = {
    name: pokemon[index].name.english,
    base: pokemon[index].base,
  };

  res.json(values);
};


// ----------------getAllPokemonMongo----------------
export const getAllPokemonMongo = async (req, res, next) => {
  try {
    const result = await pokemonMongo.find();
    console.log(result);
    if (!result.length)
      throw new { statusCode: 404, message: "No pokemon in MongoDB found" }();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getByIDMongo = async (req, res,next) => {
  try {
    const result = await pokemonMongo.findById(req.params.id);
    if (!result.length)
      throw new { statusCode: 404, message: "No pokemon in MongoDB found" }();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const addToMongo = async (req, res, next) => {
  const { name_won, name_los, turns,has_won} = req.body;
  try {
       const newPokemon = await pokemonMongo.create({
      name_won,
      name_los,
      turns,
      has_won
    });
    res.status(201).json(newPokemon);
  } catch (error) {
    console.log('Error from addToMongo:',error.stack);
    next(error);
  }
};
