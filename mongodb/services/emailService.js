const nodemailer = require('nodemailer')

const sendEmail = async(data) => {
    try{
        let config = {
            service: 'gmail',
            auth: {
                user: process.env.NODEJS_GMAIL_APP_USER,
                pass: process.env.NODEJS_GMAIL_APP_PASSWORD
            }
        }
        let transporter = nodemailer.createTransport(config);
        let message = {
            from: process.env.NODEJS_GMAIL_APP_USER,
            to: data.email,
            subject: "Welcome to KARKA",
            html: '<b>Hello...</b>'
        }
        let info = await transporter.sendMail(message)

        let result = {
            msg: "Email sent",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        }
        return result
    }catch(err){
        return err
    }
    
}

module.exports = {sendEmail}