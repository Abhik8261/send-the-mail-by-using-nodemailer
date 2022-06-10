const nodemailer = require("nodemailer");
require('dotenv').config()


async function main() {
  
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    service:'gmail',
    auth: {
      user: process.env.FROM, 
      pass: process.env.PASS, 
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  
  
  let info = await transporter.sendMail({
    from: '"Abhi👻" <foo@example.com>',
    to: process.env.TO.split(','), 
    subject: "Hello ✔",
    text: "", 
    html: "<b>Hello  how r u?</b>",
     
  });
  

   console.log("Message sent: %s", info.messageId);
  
  
  //  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);