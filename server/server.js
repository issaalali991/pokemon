import express from 'express';
import pokemonRouter from "./routes/pokemonRouter.js";
import cors from "cors";
import './db/db.js'
import e from 'express';
import { errorHandelr } from './middleware/ErrorHandler.js';

// SErver
const PORT = 3000;
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routs
app.use("/pokemon", pokemonRouter);
//Error Handler
app.use(errorHandelr);
app.listen(PORT, () => { console.log(`Server is runing:  http://localhost:${PORT}/pokemon`); })