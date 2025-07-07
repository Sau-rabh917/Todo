import express from "express";
import {
  createTodoController,
  getTodoController,
  deleteTodoController,
  updateTodoController,
} from "../controllers/todoController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // Make sure folder and file name match

const router = express.Router();

// Create todo
router.post("/create", authMiddleware, createTodoController);

// Get all todos for a user
router.get("/getAll/:userId", authMiddleware, getTodoController);

// Delete todo
router.delete("/delete/:id", authMiddleware, deleteTodoController);

// Update todo
router.put("/update/:id", authMiddleware, updateTodoController);

export default router;
