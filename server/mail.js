const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '<senderEmailId>',
    pass: '<password>',
  },
});

var options = {
  from: '<senderEmailId>',
  to: '<receiverEmailId>',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transporter.sendMail(options, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
