import {
  getMessagesQuery,
  getMessageQuery,
  sendMessageQuery,
} from "../services/utils/message.js";
import { getUsersQuery } from "../services/utils/userQuery.js";

// These controllers are easy to maintain.
// They have the same structure, just depends on the query method.
// All the log in this files are used in case you got error using any controllers.

export const getMessages = async (req, res) => {
  try {
    const idUser = req.user.idUser;
    const messages = await getMessagesQuery(idUser);
    res.status(200).json(messages.rows);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Cannot get message",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { username } = req.user;
    const { idMessage } = req.body;
    const message = await getMessageQuery(idMessage, username);
    res.status(200).json(message.rows);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Cannot get message",
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { receiverUsername, senderUsername, content, hint, privacy } =
      req.body;
    const users = await getUsersQuery();
    if (!users.rows.some((user) => user.username === receiverUsername)) {
      return res.status(400).json({
        success: false,
        message: "This username doesn't exist",
      });
    }
    await sendMessageQuery(
      receiverUsername,
      senderUsername,
      content,
      hint,
      privacy,
    );
    res.status(200).json({
      success: true,
      message: "Message sent succesfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Cannot send message",
    });
  }
};

