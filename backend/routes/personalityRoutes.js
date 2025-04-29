import { Router } from "express";
import { getPersonality, updateFavoriteColor, updateAttractedBy, updateColorScheme, updateHairLength, updateIsExtrovert, updateIsSingle, updateLanguage } from "../controllers/personalityControllers.js";
import { authenticateUser } from "../utils/authenticateUser.js";

const router = Router();

// Current user's own data.
router.get("/me", authenticateUser, getPersonality);
router.put("/me/favorite_color", authenticateUser, updateFavoriteColor);
router.put("/me/colorscheme", authenticateUser, updateColorScheme);
router.put("/me/is_extrovert", authenticateUser, updateIsExtrovert);
router.put("/me/is_single", authenticateUser, updateIsSingle);
router.put("/me/language", authenticateUser, updateLanguage);
router.put("/me/hair_length", authenticateUser, updateHairLength);
router.put("/me/attracted_by", authenticateUser, updateAttractedBy);

// Other user's data. if they are not private TODO: Add that later.
export default router;