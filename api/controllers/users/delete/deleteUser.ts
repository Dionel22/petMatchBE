import { Users } from "../../../models/User";

export const deleteUser = async (userId: string) => {
    try {
        const deletedUser = await Users.destroy({ where: { id: userId } })
        return deletedUser;
    } catch (error) {
        console.error(error);
        throw new Error('Error al eliminar al usuario')
    }
}

export const suspendUser = async (userId: string) => {
    try {
        const user = await Users.findByPk(userId);

        if(!user) {
            throw new Error("Usuario no encontrado.")
        }

        user.isActive = false;
        await user.save();

        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Error al suspender al usuario.")
    }
}

export const unSuspendUser = async (userId: string) => {
    try {
        const user = await Users.findByPk(userId);

        if (!user) {
            throw new Error("Usuario no encontrado.")
        }

        user.isActive = true;
        await user.save();

        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Error al quitar la suspensión del usuario.");
    }
};