require("dotenv").config();
const { CLIENT_ID, CLIENT_SECRET } = process.env;
// google
import { OAuth2Client } from 'google-auth-library';
// controllers
import { postUser } from '../../users/post/postUser';


const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);

async function createUserGoogle(idToken: string): Promise<void> {
    try {
        const ticket = await client.verifyIdToken({
            idToken,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (payload) {
            // Extraer información del usuario desde el payload
            const userId = payload.sub;
            const userEmail = payload.email || "";
            const userName = payload.name || "";

            const user = await postUser(
                userName,
                "default",
                userEmail,
                "default",
                "default",
                "usuario"
            );
        // creacion de usuario
            console.log('Nuevo usuario creado:');
            console.log(`ID: ${userId}`);
            console.log(`Nombre: ${userName}`);
            console.log(`Email: ${userEmail}`);
        }
    } catch (error) {
        console.error("El usuario no fue creado por un error: ", error);
    }
}
export { createUserGoogle };