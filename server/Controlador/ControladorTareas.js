import {pool} from '../db.js'


export const getTareas= async (req,res)=>{
   /*try{
    const [result] = await pool.query('select * from registro')
    res.json(result)
   }
   catch(error){
    return res.status(300).json({mensaje:error.mensaje})
   }*/
   res.send("Obteniendo una")
}
export const getTarea= async (req,res)=>{
try{
    const [result] = await pool.query('select * from registro where id=?',[req.params.Id])//Requerimiento de parametro en este caso el ID
    res.json(result)
}
catch(error){
    return res.status(500).json({mensaje:error.mensaje})
   }
}
export const createTareas= async (req,res)=>{
    try{
        const {Nombre,Identificacion,Rol}= req.body
    const [result]=await pool.query('INSERT INTO registros(Nombre,Identificacion,Rol) VALUES (?,?,?)',[Nombre,Identificacion,Rol])
    res.json({
        Nombre,Identificacion,Rol
    })
    }
    catch(error){
        return res.status(400).json({mensaje:error.mensaje})
       } 
       
}
export const updateTareas=async (req,res)=>{
  try{
    const [result]=await pool.query('update  registro set ? where id=?',[req.body,req.params.Id])
    res.json(result)
  }
  catch(error){
    return res.status(500).json({mensaje:error.mensaje})
   }
}
export const deleteTareas=async (req,res)=>{
    try{
        const [result]=await pool.query('delete  from registro where id=?',[req.params.Id])
    res.json(result)
    }
    catch(error){
        return res.status(500).json({mensaje:error.mensaje})
       }
}