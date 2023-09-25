import { Router } from "express";
import { getTarea,
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas } from "../Controlador/ControladorTareas.js";
const router=Router();

router.get('/tarea',getTareas);
router.get('/tarea:Id',getTarea);//Parametro unico
router.post("/tarea",createTareas);//crea tarea
router.put('/tarea/:Id',updateTareas);//parametro cualquiera
router.delete('/tarea/:Id',deleteTareas);//Elimina tarea

export default router
