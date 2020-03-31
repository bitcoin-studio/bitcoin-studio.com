const express = require('express')
const {check, validationResult} = require('express-validator')
const nodeMailer = require('nodemailer')
const bodyParser = require('body-parser')
const log = require('loglevel')
require('dotenv').config()

// Set log level
log.setLevel('trace')

const PORT = process.env.PORT || 5000

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/send-email', [
  check('name')
    .isLength({max: 50}).withMessage('must be at max 50 chars long')
    .trim()
    .escape(),
  check('email')
    .isLength({max: 50}).withMessage('must be at max 50 chars long')
    .isEmail()
    .normalizeEmail()
    .withMessage('email is not valid'),
  check('message')
    .isLength({max: 2000})
    .withMessage('must be at max 2000 chars long')
    .trim()
    .escape()
], (req, res) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'rochestephane782@gmail.com',
        pass: process.env.SMTP_GMAIL_PASS
      }
    })
    const mailOptions = {
      from: `"${req.body.name}" <${req.body.email}>`,
      to: 'bitcoin-studio@protonmail.com',
      subject: 'Bitcoin Studio Website Form',
      text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        log.error(error)
      } else {
        log.info('Message %s sent: %s', info.messageId, info.response)
      }
    })
    res.end()
  } else {
    res.status(422).json({errors: errors.array()})
  }
})

app.listen(PORT, () => {
  log.info(`Server listening on port ${PORT}`)
})
