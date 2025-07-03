import express from "express";
import { testsController } from "../controllers/testController.js";

const router = express.Router();

router.get("/", testsController);

export default router;

