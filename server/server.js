import express from 'express';
import pokemonRouter from "./routes/pokemonRouter.js";
import cors from "cors";

// SErver
const PORT = 3000;
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routs
app.use("/pokemon", pokemonRouter);

app.listen(PORT, () => { console.log(`Server is runing:  http://localhost:${PORT}/pokemon`); })