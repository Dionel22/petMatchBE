
// google
import { OAuth2Client } from 'google-auth-library';
// controllers
import { postUser } from '../../users/post/postUser';


const CLIENT_ID = "455768951489-dpmia14fe22vcrimo4fmgbtqnngab2b7.apps.googleusercontent.com";
const CLIENT_SECRET = "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"

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
