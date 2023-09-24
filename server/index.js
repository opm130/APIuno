import express  from "express";
import { Port } from "./config.js";
import ruticas from "./rutas/rutas.js";
import tareas from "./rutas/tareas.js"
import cors from 'cors'

const app=express();
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(ruticas);
app.use(tareas);
app.listen(Port)
console.log("holas");