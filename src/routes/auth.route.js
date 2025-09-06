import { Router } from "express";
import { createAccount, login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", createAccount);
router.post("/login", login);

export default router;

