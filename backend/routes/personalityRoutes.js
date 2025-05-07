import { Router } from "express";
import { getPersonality, updateFavoriteColor, updateAttractedBy, updateColorScheme, updateHairLength, updateIsExtrovert, updateIsSingle, updateLanguage } from "../controllers/personalityControllers.js";
import { authenticateUser } from "../utils/authenticateUser.js";

const router = Router();

// Route for getting user's personality.
router.get("/me", authenticateUser, getPersonality);

// Route for updating user's personality.
router.put("/me/favorite_color", authenticateUser, updateFavoriteColor);
router.put("/me/colorscheme", authenticateUser, updateColorScheme);
router.put("/me/is_extrovert", authenticateUser, updateIsExtrovert);
router.put("/me/is_single", authenticateUser, updateIsSingle);
router.put("/me/language", authenticateUser, updateLanguage);
router.put("/me/hair_length", authenticateUser, updateHairLength);
router.put("/me/attracted_by", authenticateUser, updateAttractedBy);

export default router;