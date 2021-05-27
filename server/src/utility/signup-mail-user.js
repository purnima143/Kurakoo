const nodemailer = require("nodemailer");

const signupMail = async ( firstName, lastName, email) => {


const transporter = nodemailer.createTransport({
    service: 'hotmail', //service offered by the outlook
    auth: {
        user: process.env.USER_MAIL, //you have to enter mail inside .env file
        pass: process.env.MAIL_PASSWORD //you have to enter paasword for the authentication inside .env file
    }
});

const options = {
    from: "no-reply-Kurakoo",
    to: email,
    subject:"Welcome to kurakoo",
    html:`Welcome to kurakoo! ${firstName}${lastName}`
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
