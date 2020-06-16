const nodemailer = require('nodemailer');

// Create the email transport method
const smtpTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wildcodesousa@gmail.com',
    pass: 'WildTrabalho1',
  },
});

const sendNodemailer = (data) => {
  console.log('data nodemailder', data);

  const mailOptions = {
    from: `${data.nome} <${data.email}>`,
    to: 'wildcodesousa@gmail.com',
    subject: `${data.assunto}`,
    text: `${data.mensagem}`,
    html: '<b>Hello world ✔</b>',
  };

  smtpTransporter.sendMail(mailOptions, (error, response) => {
    console.log("erroooos");
    if (error) {
      console.log(error);
    } else {
      console.log(`Message sent: ${response.message}`);
    }
    smtpTransporter.close();
  });
};

module.exports = sendNodemailer;
