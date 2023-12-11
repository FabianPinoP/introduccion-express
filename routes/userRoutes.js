import express from 'express';
import { listUsers, createUser } from '../src/controllers/usersController.js';
const router = express.Router();

router.get('/users', listUsers);
router.post('/users', createUser);

export default router;