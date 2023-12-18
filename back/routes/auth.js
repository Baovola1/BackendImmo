import express from "express";
const router = express.Router();
import { signup } from "../controllers/auth.controller.js";
import { signin } from "../controllers/auth.controller.js";
import { google } from "../controllers/auth.controller.js";
import {logout} from "../controllers/auth.controller.js";

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);
router.get('/logout',logout);

export default router;