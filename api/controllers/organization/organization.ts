import { Request, Response } from "express";
import { Users } from "../../models/User";
// import { Pet } from "../../models/Pets";

export const getOrganizacionData = async (req: Request, res: Response) => {
    const organizationId = req.user.organizationId;

    try {
        const users = await Users.findAll({where: {organizationId, deletedAt: null}});
        res.json({users});
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los datos de la organización'})
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const user = await Users.findByPk(id);
        if (user) {
            await user.destroy();
            res.sendStatus(200);
        } else {
            res.status(404).json({error: 'Usuario no encontrado.'})
        }
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar el usuario.'})
    }
}

export const suspendUser = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const user = await Users.findByPk(id);
        if (user) {
            user.deletedAt = new Date();
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({error: 'Usuario no encontrado.'})
        }
    } catch (error) {
        res.status(500).json({error: 'Error al suspender al usuario.'})
    }
};