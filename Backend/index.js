import express from "express";
import userRouter from "./routes/userRoutes.js";
import testRouter from "./routes/testRoutes.js";
import todoRouter from "./routes/todoRoutes.js";
import db from "./config/dbconnect.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
db(); // connect to database



const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json()); //middlewares

// middleware 
app.use("/api/test", testRouter);
app.use("/api/todo", todoRouter);
app.use("/api/user", userRouter);

 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 