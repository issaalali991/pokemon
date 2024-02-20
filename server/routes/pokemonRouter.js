import {Router} from "express"
import * as pokemonController from '../controllers/pokemonController.js';




const pokemonRouter = Router();

pokemonRouter.get('/', pokemonController.getAllPokemon);
pokemonRouter.get('/:id',pokemonController.getPokemonByID);
pokemonRouter.get('/:id/:info', pokemonController.getPokemonInfoByID);
pokemonRouter.post('/mongo', pokemonController.addToMongo);
pokemonRouter.get('/mongo', pokemonController.getAllPokemonMongo);
pokemonRouter.get('/mongo/:id', pokemonController.getByIDMongo);


export default pokemonRouter;