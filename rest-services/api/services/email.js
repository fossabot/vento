let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'emailbotgreenrooots@gmail.com',
      pass: 'testbot2019'
    }
});


module.exports.sendEmail = async function(params) {
    
    let subsEmail = params['to'];
    
    console.log('Subscribed Emails to send @ ' + new Date(), subsEmail);

    let mailOptions = {
        from: 'emailbotgreenrooots@gmail.com',
        to: subsEmail,
        subject: params['subject'],
        html: params['message']
    };
    

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email has been sent successfully: ' + info.response);
        }
    });
}