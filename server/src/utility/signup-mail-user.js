const nodemailer = require("nodemailer");

const signupMail = async ( firstName, lastName, email) => {


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: "himanshu.jaidka@gmail.com",
        pass: "EAT100apples@"
    }
});

const options = {
    from: "no-reply-Kurakoo",
    to: "himanshu.september@gmail.com",
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
