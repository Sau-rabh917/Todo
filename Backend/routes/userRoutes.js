import express from "express";
import { registerController,logincontroller} from "../controllers/userController";

const router = express.Router();

router.post("/register", registercontroller);
router.post("/login", logincontroller);
