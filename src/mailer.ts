const nodemailer = require('nodemailer');
import { config } from '../config'; // File that contains the main important variables in the system

// declare vars,
let fromMail = config.gmail.email;
let mailPassword = config.gmail.password;
let toMail = config.gmail.professionalEmail;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: fromMail,
        pass: mailPassword
    }
});

const sendEmail = (subject, text) => {
    // email options
    let mailOptions = {
        from: fromMail,
        to: toMail,
        subject: subject,
        text: text
    };

    // send email
    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error);
        }
        console.log(response)
    });
}

export const mailer = {
    sendEmail
}