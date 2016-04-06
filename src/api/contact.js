/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { Router } from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport('smtp://andersson.nicklas%40gmail.com:XI36FhxMhHo7uDZD3TDkdQ@smtp.mandrillapp.com:587');
const router = new Router();

router.post('/', async (req, res, next) => {
  try {
    // setup e-mail data with unicode symbols
    let body = `
      Hi there!  🐴
      ${req.body.name}
      ${req.body.email}
      ${req.body.story}
    `;
    let mailOptions = {
      from: '"Therese Sangö" <therese@zubu.se>', // sender address
      to: 'therese.sangoe@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: body, // plaintext body
      html: body // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.status(200).send({status:'ok'});
    });
  } catch (err) {
    next(err);
  }
});

export default router;

