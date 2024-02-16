import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  name_won: {
    type: string,
  },
  name_los: {
    type: string,
  },
    turns: {
      type: number
    },
    is_won: {
        type: number
        }
});