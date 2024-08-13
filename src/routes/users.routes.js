import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/users', async (req, res) =>{
    const {rows} = await pool.query("SELECT * FROM users");
    res.json(rows);
});

router.get('/users/:id', async (req, res) =>{
    const {id} = req.params
    const {rows} = await pool.query("SELECT * FROM users where id = $1", [id] );
    if (rows.length === 0){
        return res.status(404).json({message: "Usuario no encontrado"});
    }
    
    res.json(rows);
})

router.post('/users', (req, res) =>{
    res.send('Creando usuario')
})

router.delete('/users/:id', (req, res) =>{
    res.send('Eliminando usuario')
})

router.put('/users/:id', (req, res) =>{
    const {id} = req.params
    res.send('Actualizando usuario' +  id)
})

export default router;