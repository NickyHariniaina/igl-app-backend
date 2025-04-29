import { getPersonalityQuery, updateAttractedByQuery, updateColorschemeQuery, updateFavoriteColorQuery, updateHairLengthQuery, updateIsExtrovertQuery, updateIsSingleQuery, updateLanguageQuery } from "../db/utils/personalityQuery.js";

export const getPersonality = async (req, res) => {
    try {
        const idUser = req.user.idUser;
        const personality = await getPersonalityQuery(idUser)
        res.status(200).json({
            success: true,
            data: personality.rows
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: "Cannot get this user's personality"
        })
    }
}

export const updateFavoriteColor = async (req, res) => {
    try {
        const idUser = req.user.idUser;
        const { favoriteColor } = req.body;
        await updateFavoriteColorQuery(favoriteColor, idUser);
        res.status(200).json({
            success: true,
            message: "Favorite color set succesfully"
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "An error occurred" });
    }
}
export const updateColorScheme = async (req, res) => {
    try {
        const idUser = req.user.idUser;
        const { colorscheme } = req.body;
        await updateColorschemeQuery(colorscheme, idUser);
        res.status(200).json({
            success: true,
            message: "Favorite colorscheme set succesfully",
            currentColorscheme: colorscheme
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "An error occurred" });
    }
}
export const updateIsExtrovert = async (req, res) => {
    try {
        const { isExtrovert } = req.body;
        const idUser = req.user.idUser;
        await updateIsExtrovertQuery(isExtrovert, idUser);
        res.status(200).json({
            success: true,
            message: "updated succesfully",
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "An error occurred" });
    }
}

export const updateIsSingle = async (req, res) => {
    try {
        const { isSingle } = req.body;
        const idUser = req.user.idUser;
        await updateIsSingleQuery(isSingle, idUser);
        res.status(200).json({
            success: true,
            message: "updated succesfully",
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "An error occurred" });
    }
}
export const updateLanguage = async (req, res) => {
    try {
        const idUser = req.user.idUser;
        const { language } = req.body;
        await updateLanguageQuery(language, idUser);
        res.status(200).json({
            success: true,
            message: "updated succesfully",
            language: language
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "An error occurred" });
    }
}
export const updateHairLength = async (req, res) => {
    try {
        const idUser = req.user.idUser;
        const { hairLength } = req.body;
        await updateHairLengthQuery(hairLength, idUser);
        res.status(200).json({
            success: true,
            message: "updated succesfully",
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "An error occurred" });
    }
}
export const updateAttractedBy = async (req, res) => {
    try {
        const { attractedBy } = req.body;
        const idUser = req.user.idUser;
        await updateAttractedByQuery(attractedBy, idUser);
        res.status(200).json({
            success: true,
            message: "updated succesfully",
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "An error occurred" });
    }
}