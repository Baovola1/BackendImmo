import express from "express";
const router = express.Router();
import { test } from "../controllers/user.controller.js";
import { updatedUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteUser } from "../controllers/user.controller.js";


router.get("/test", test);
router.post("/update/:id", verifyToken, updatedUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
