import express from "express";
const router = express.Router();
import { test } from "../controllers/user.controller.js";
import { updatedUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteUser,getUserListings, getUser } from "../controllers/user.controller.js";



router.get("/test", test);
router.post("/update/:id", verifyToken, updatedUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id",verifyToken,getUserListings)
router.get('/:id', verifyToken,getUser)

export default router;
