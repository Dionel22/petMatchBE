const nodemilar = require("nodemailer")

const config = {
    host: "smtp.gmail.com",//para enviar otro correo
    port: 587,
    service: "gmail",
    auth: {
        user: "petmatch.contacto@gmail.com",
        pass: "henrypf2023"
    }
}

export const enviado = async () => {
    const transport = nodemilar.createTransport(config)
    const mensaje = {
        from: "petmatch.contacto@gmail.com",//"email el que lo quiero enviar",
        to: "petmatch.contacto@gmail.com",
        subject: "correo de prueba",
        text: "envio desde back end"
    }
    const info = await transport.sendMail(mensaje)
    console.log(info)
    return info;
}

//llamar la funcion desde handle create un handle y ruta