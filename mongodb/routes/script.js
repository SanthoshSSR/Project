const express = require ('express')
const route = express.Router()
const emailService = require('../services/emailService')
// const nodemailer = require('nodemailer')
// require('dotenv').config()

route.post('/send_email', async(req,res) => {
    // let config = {
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.NODEJS_GMAIL_APP_USER,
    //         pass: process.env.NODEJS_GMAIL_APP_PASSWORD
    //     }
    // }
    // let transporter = nodemailer.createTransport(config);
    // let message = {
    //     from: process.env.NODEJS_GMAIL_APP_USER,
    //     to: req.body.email,
    //     subject: "Welcome to KARKA",
    //     html: '<b>Hello...</b>'
    // }
    // transporter.sendMail(message).then((info) => {
    //     let data = {
    //         msg: "Email sent",
    //         info: info.messageId,
    //         preview: nodemailer.getTestMessageUrl(info)
    //     }
    //     return res.status(200).send({data : data})
    // }).catch((err) => {
    //     return res.status(404).send({message:err})
    // })

    try{
        let data = req.body
        let result = await emailService.sendEmail(data)
        res.status(200).json({data : result})
    }
    catch(err){
        res.status(500).json({error: err})
    }
})

module.exports = route