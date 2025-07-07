import Todo from "../models/todoModel.js"; // adjust path as needed

// CREATE TODO
export const createTodoController = async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.user.id; // from authMiddleware
    const todo = new Todo({ text, user: userId });
    await todo.save();
    res.status(201).json({ success: true, todo });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating todo", error });
  }
};

//GET TODO
export const getTodoController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const todos = await Todo.find({ user: userId });
    res.status(200).json({ success: true, todos });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching todos", error });
  }
};

//delete api
export const deleteTodoController = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Todo deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting todo", error });
  }
};

//Update todo
export const updateTodoController = async (req, res) => {
  try {
    const { text } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );
    res.status(200).json({ success: true, todo });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating todo", error });
  }
};