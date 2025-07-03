import express from "express";
import userRouter from "./routes/userroutes.js";
import db from "./config/dbconnect.js";

import {configDotenv} from "dotenv";

configDotenv();
db();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/users", userRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
