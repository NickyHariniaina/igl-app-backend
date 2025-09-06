import { Router } from "express";
import { authenticateUser } from "../utils/authenticateUser.js";
import {
  sendMessage,
  getMessage,
  getMessages,
} from "../controllers/message.controller.js";
const router = Router();

// you cannot fetch other user's message.
router.get("/", authenticateUser, getMessages);
router.get("/message", authenticateUser, getMessage);
router.post("/message", sendMessage);

export default router;

