require("dotenv").config();
const nodemilar = require("nodemailer")
const { USER_MAIL , PASS_MAIL } = process.env;

const config = {
    host: "smtp.gmail.com",//para enviar otro correo
    port: 587,
    service: "gmail",
    auth: {
        user: USER_MAIL,
        pass: PASS_MAIL
    }
}

export const enviado = async () => {
    const transport = nodemilar.createTransport(config)
    const mensaje = {
        from: "petmatch71@gmail.com",//"email el que lo quiero enviar",
        to: "petmatch71@gmail.com",
        subject: "correo de prueba",
        text: "envio desde back end"
    }
    const info = await transport.sendMail(mensaje)
    console.log(info)
    return info;
}

//llamar la funcion desde handle create un handle y ruta