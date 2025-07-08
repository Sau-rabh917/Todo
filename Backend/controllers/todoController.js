import Todo from "../models/todoModel.js"; // adjust path as needed

// CREATE TODO
export const createTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // from authMiddleware
    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and description are required" });
    }
    const todo = new Todo({ title, description, createdBy: userId });
    await todo.save();
    res.status(201).json({ success: true, todo });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating todo", error });
  }
};

//GET TODO - Get todos for the authenticated user
export const getTodoController = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from auth middleware
    const todos = await Todo.find({ createdBy: userId }).sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({ success: true, todos });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching todos", error });
  }
};

//delete api - Ensure user can only delete their own todos
export const deleteTodoController = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    
    // Find the todo and check if it belongs to the user
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    
    if (todo.createdBy.toString() !== userId) {
      return res.status(403).json({ success: false, message: "You can only delete your own todos" });
    }
    
    await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting todo", error });
  }
};

//Update todo - Ensure user can only update their own todos
export const updateTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    const todoId = req.params.id;
    
    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and description are required" });
    }
    
    // Find the todo and check if it belongs to the user
    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    
    if (existingTodo.createdBy.toString() !== userId) {
      return res.status(403).json({ success: false, message: "You can only update your own todos" });
    }
    
    const todo = await Todo.findByIdAndUpdate(
      todoId,
      { title, description },
      { new: true }
    );
    res.status(200).json({ success: true, todo });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating todo", error });
  }
};