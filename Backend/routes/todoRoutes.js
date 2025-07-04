import express from 'express';
import { createTodoController } from '../controllers/todoController.js';
import { authMiddleware } from '../middelware/middelwares.js';

const router = express.Router();


router.post('/create',authMiddleware, createTodoController); 

export default router;