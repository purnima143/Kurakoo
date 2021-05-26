const nodemailer = require("nodemailer");

const signupMail = async ( firstName, lastName, email) => {


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.MAIL_PASSWORD
    }
});

const options = {
    from: "no-reply-Kurakoo",
    to: email,
    subject:"Welcome to kurakoo",
    html:`Hello Admin! Welcome to kurakoo! ${firstName}${lastName}! `
};

transporter.sendMail(options, function( err, info ) {
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent:" + info.response)
})

}
module.exports = welcomeMail = {
    signupMail
};
