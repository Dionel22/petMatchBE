const nodemailer = require('nodemailer');

export async function sendEmail(email: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'petmatch.noreply@gmail.com',
      pass: 'bhquxzldrikmfvjm',
    },
  });

  const mailOptions = {
    from: 'petmatch.noreply@gmail.com',
    to: email,
    subject: 'Nuevo usuario registrado',
    text: 'Se ha creado una nueva cuenta de usuario.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
}

