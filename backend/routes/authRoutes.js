import { Router } from "express";
import { createAccount, login } from "../controllers/authControllers.js";

const router = Router();

router.post("/register", createAccount);
router.post("/login", login);

export default router;