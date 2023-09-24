import { Router } from "express";
import { getTarea,
    getTareas,
    createTareas,updateTareas,deleteTareas } from "../Controlador/ControladorTareas.js";
const router=Router();

router.get('/tarea',getTareas)
router.post("/tarea",createTareas)//crea tarea
router.put('/tarea/:id',updateTareas)//parametro cualquiera
router.get('/tarea:id',getTarea)//Parametro unico
router.delete('/tarea/:id',deleteTareas)//Elimina tarea

export default router
