import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  name_won: {
    type: String,
  },
  name_los: {
    type: String,
  },
    turns: {
      type: Number
    },
    has_won: {
        type: Number
        }
});

export default mongoose.model('pokemonMongo', pokemonSchema);