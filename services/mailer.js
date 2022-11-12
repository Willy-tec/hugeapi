const nodemailer = require("nodemailer");

async function sendMail(userName, user) {
  let transporter = await nodemailer.createTransport({
    host: "mandarine.o2switch.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  let info = await transporter.sendMail({
    from: "bonjour@hugeapi.closix.fr", // sender address
    to: user, // list of receivers
    subject: "Inscription", // Subject line
    text: "Bienvenue " + userName + " sur hugeapi, le site qui vous apifie la gueule", // plain text body
    html: "<h1>Bienvenue " + userName + "  sur hugeapi,</h1> <p>le site qui vous apifie la gueule</p>", // html body
  });
}

module.exports = sendMail;
