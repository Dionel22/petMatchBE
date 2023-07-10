import { getAllUser } from "./get/getAllUser";
import { postUser } from "./post/postUser";
import { getUserById } from "./get/getUserById";
import { getUserByEmail } from "./get/getUserByEmail";
import { suspendUser, deleteUser } from "./delete/deleteUser";

export const userController = {
    getAllUser,
    getUserById,
    getUserByEmail,
    postUser,
    deleteUser,
    suspendUser,
};