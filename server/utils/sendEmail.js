const nodeMailer = require("nodemailer");
const fs = require('fs');
const path = require('path');

const sendEmail = async (options, contentType = 'html') => {
    const transporter = nodeMailer.createTransport({
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: "qdhqxkhfbwnerslj"
        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
    };

    if (contentType === 'text') {
        mailOptions.text = options.message;
    } else if (contentType === 'html' && options.subject === 'Bidding Confimation from Auction waly') {
        // Load the HTML template and replace placeholders
        const templatePath = path.join(__dirname, 'templates', 'makebid.html');
        const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
        const replacedHtml = htmlTemplate
            .replace('{{reqUser}}', options.reqUser)
            .replace('{{name}}', options.name)
            .replace('{{model}}', options.model)
            .replace('{{location}}', options.location)
            .replace('{{ownerName}}', options.ownerName)
            .replace('{{ownerContact}}', options.ownerContact)
            .replace('{{bidPrice}}', options.bidPrice)

        mailOptions.html = replacedHtml;
    }


    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;