require("dotenv").config();
const nodemilar = require("nodemailer")
const { USER_MAIL , PASS_MAIL, USER_MAIL1, HOST, POST1, MAIL } = process.env;

const config = {
    host: HOST,//para enviar otro correo
    port: POST1,
    service: MAIL,
    auth: {
        user: USER_MAIL,
        pass: PASS_MAIL
    }
}

export const enviado = async () => {
    const transport = nodemilar.createTransport(config)
    const mensaje = {
        //"email el que lo quiero enviar",
        from: USER_MAIL1,
        to: USER_MAIL1,
        subject: "",
        text: ""
    }
    const info = await transport.sendMail(mensaje)
    console.log(info)
}

//llamar la funcion desde handle create un handle y ruta