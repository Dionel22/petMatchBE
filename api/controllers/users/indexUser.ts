import { getAllUser } from "./get/getAllUser";
import { postUser } from "./post/postUser";
import { getUserById } from "./get/getUserById";
import { getUserByEmail } from "./get/getUserByEmail";

export const userController = {
    getAllUser,
    getUserById,
    getUserByEmail,
    postUser,
};