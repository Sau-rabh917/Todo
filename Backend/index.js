import express from "express";
import userRouter from "./routes/userroutes.js";
import db from "./config/dbconnect.js";
import dotenv from "dotenv";

dotenv.config();
db();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/users", userRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
