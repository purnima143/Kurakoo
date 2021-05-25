const nodemailer = require("nodemailer");

const signupMail = async ( firstName, lastName, email) => {


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.USER_MAIL, // you have to edit inside .env file.
        pass: process.env.MAIL_PASSWORD // you have to edit inside .env file.
    }
});

const options = {
    from: "Kurakoo",
    to: email,
    subject:"Welcome to kurakoo",
    html:`Welcome to kurakoo! ${firstName}${lastName}. You are Admin!`
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