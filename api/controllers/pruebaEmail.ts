require("dotenv").config();
const nodemilar = require("nodemailer")
const { USER_MAIL , PASS_MAIL, USER_MAIL1 } = process.env;

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
        from: USER_MAIL1,//"email el que lo quiero enviar",
        to: USER_MAIL1,
        subject: "correo de prueba",
        text: "envio desde back end"
    }
    const info = await transport.sendMail(mensaje)
    console.log(info)
    return info;
}

//llamar la funcion desde handle create un handle y ruta