import { Request, Response } from 'express';
import { userController } from "../../controllers/users/indexUser";
import bcrypt from 'bcrypt';
const { generateAccessToken } = require("../../utils/tokensManager")


const handlerUserAuthentication = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // busco en DB
        const user = await userController.getUserByEmail(email);

        console.log(user)

        if (!user) {
            return res.status(401).json({error: "Invalid credentials"
            });
        }

        // comparo contraseña ingresada con existente
        const passwordValid = await bcrypt.compare(password, (await user).passwordKey);

        console.log(passwordValid)

        if (!passwordValid) {
            //contraseña incorrecta
            return res.status(401).json({ error: "Invalid Credentials"});
        }
        const { passwordKey, ...newUser } = user.toJSON(); 

        console.log("----------->",newUser, "<----------")

        const token = await generateAccessToken(newUser.id);

        console.log(token)

        // usuario autenticado
        return res.status(200).json({user: newUser, accessToken: token});

    } catch (error) {
        // Si hay fallas
        return res.status(500).json({ error: "error in processing the data"})
    }
}

export const userAuthenticationHandler = {
    handlerUserAuthentication,
};