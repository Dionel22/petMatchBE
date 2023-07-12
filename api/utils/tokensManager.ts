const { sign } = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET } = process.env;// nuevo .env para mi gerador de tokens user

// Generar un token de acceso
export async function  generateAccessToken(userId: string, userType: string): Promise<string> {
    // Define la información que deseas incluir en el token (puede ser cualquier dato relevante para tu aplicación)
    const payload = {
      userId: userId,
      type: userType
    };
    try {
        const token = await sign(payload, JWT_SECRET, { expiresIn: '1d' });
  
        return token;
    } catch (error:any) {
        console.error(error);
        return ''
    }
  
    // Genera el token utilizando la firma secreta y opciones como el tiempo de expiración
   
  }