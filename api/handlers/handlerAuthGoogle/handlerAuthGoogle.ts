import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { postUser } from '../../controllers/users/post/postUser'; 
import { userGoogleController } from '../../controllers/usersGoogle/indexUserG';
import { generateAccessToken } from '../../utils/tokensManager';
const  { CLIENT_ID, CLIENT_SECRET } = process.env;

const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);

interface User {
  id: string;
  name: string;
  email: string;
}

// Función para encontrar un usuario en mi base de datos
async function findUserByEmail(userEmail: string): Promise<User | null> {
  try {
    const user = await userGoogleController.getUserGByEmail(userEmail);

    if (user) {
      // El usuario fue encontrado
      console.log(`Usuario encontrado: ${user}`);
      return user;
    } else {
      // El usuario no fue encontrado
      return null;
    }
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la búsqueda del usuario
    console.error('Error al buscar el usuario por correo electrónico: ', error);
    throw new Error('Error al buscar el usuario');
  }
}

async function googleAuthenticationHandler(req: Request, res: Response): Promise<void> {
  try {
    const { idToken } = req.body
    console.log(idToken);
    
    const ticket = await client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    
    if (payload) {
      const userId = payload.sub;
      const userEmail = payload.email || "";
      const userName = payload.name || "";

      // Verificar si el usuario ya existe en mi base de datos
      const existingUser = await findUserByEmail(userEmail);
      // y si uso User.findOne({ email: userEmail});

      if (existingUser) {
        // El usuario ya existe
        // Pense en aplicar el TOKEN Aqui

        const token = await generateAccessToken(existingUser.id, "usuario");

        console.log(token)

        // usuario autenticado
        res.status(200).json({user: existingUser, accessToken: token});
        return; 
      } else {
        // El usuario no existe, creao un nuevo usuario en tu base de datos o sistema
        const newUser = await postUser(
          userName,
          "default",
          userEmail,
          "default",
          "default",
          "usuario"
        );

        const token = await generateAccessToken(newUser.id, "usuario");

        console.log(token)

        // usuario autenticado
        res.status(200).json({user: newUser, accessToken: token});
      }
      return;
    } else {
      res.status(400).json({ error: 'Token de ID inválido' });
      return;
    }
  } catch (error) {
    console.error('Error en la autenticación de Google:', error);
    res.status(500).json({ error: 'Error en la autenticación de Google' });
    return;
  }
}


export { googleAuthenticationHandler };