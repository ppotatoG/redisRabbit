import express from 'express';
import { createUser, readUsers, deleteUser, updateUser } from '../controllers/userController';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', readUsers);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
