require("dotenv").config();
const nodemailer = require('nodemailer');
const { MAILER_PASSWORD } = process.env 

export async function sendEmail(email: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'petmatch.noreply@gmail.com',
      pass: MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'petmatch.noreply@gmail.com',
    to: email,
    subject: '¡Bienvenido a PetMatch! Confirmación de registro exitoso.',
    text: '¡Gracias por unirte a PetMatch! Estamos encantados de que te hayas registrado y te damos la más cordial bienvenida a nuestra comunidad dedicada a las mascotas. En PetMatch, nos apasiona ayudar a las mascotas a encontrar un hogar amoroso y brindarles el cuidado que merecen. Ya sea que estés interesado en adoptar una mascota o en publicar o comprar productos para tus compañeros peludos, estás en el lugar correcto.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
}

