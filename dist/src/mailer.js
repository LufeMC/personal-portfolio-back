"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailer = void 0;
const nodemailer = require('nodemailer');
const config_1 = require("../config"); // File that contains the main important variables in the system
// declare vars,
let fromMail = config_1.config.gmail.email;
let mailPassword = config_1.config.gmail.password;
let toMail = config_1.config.gmail.professionalEmail;
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
        console.log(response);
    });
};
exports.mailer = {
    sendEmail
};
//# sourceMappingURL=mailer.js.map