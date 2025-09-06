import { Router } from "express";
import {
  getUsers,
  updateUsername,
  updatePassword,
  updateProfilPicture,
  getUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { authenticateUser } from "../utils/authenticateUser.js";

const router = Router();

router.get("/", getUsers);
router.put("/me/username", authenticateUser, updateUsername);
router.put("/me/password", authenticateUser, updatePassword);
router.put("/me/profil_picture", authenticateUser, updateProfilPicture);
router.get("/me", authenticateUser, getUser);
router.delete("/me", authenticateUser, deleteUser);

export default router;

