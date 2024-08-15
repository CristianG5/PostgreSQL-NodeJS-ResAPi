import { Router } from "express";
import { createUsers, deleteUsers, getUser, getUsers, updateUsers } from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser)

router.post('/users', createUsers);

router.delete('/users/:id', deleteUsers);

router.put('/users/:id', updateUsers)

export default router;