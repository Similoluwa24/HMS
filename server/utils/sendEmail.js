const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config()


const sendEmail = async (options) =>{

    // const transport = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST ,
    //     port: process.env.SMTP_PORT,
    //     auth: {
    //       user: process.env.SMTP_USER ,
    //       pass:  process.env.SMTP_PASSWORD
    //     }
    //   });
    // Looking to send emails in production? Check out our Email API/SMTP product!
const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "49889ee8d742d0",
    pass: "1ac958a91514c2"
  }
});
      
    const message = {
        from :`${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_MAIL}>`,
        to: options.email,
        subject:options.subject,
        text :options.message
    }
    await transport.sendMail(message)
}

module.exports = sendEmail