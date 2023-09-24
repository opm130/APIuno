import { Router } from "express";
import { pool } from "../db.js";

const  ruticas=Router();
ruticas.get('/pin',async (req,res)=>{
const [rows]= await pool.query('select * from registros' )
console.log(rows)
res.json(rows[0])
})
export default ruticas