import {Router} from "express"
import { getAllPokemon, getPokemonByID, getPokemonInfoByID } from '../controllers/pokemonController.js'


const pokemonRouter = Router();

pokemonRouter.get('/', getAllPokemon);
pokemonRouter.get('/:id',getPokemonByID);
pokemonRouter.get('/:id/:info', getPokemonInfoByID);

export default pokemonRouter;