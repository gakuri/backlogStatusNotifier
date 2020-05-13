import mailer = require("nodemailer");

let smtpConnectionSetting = {
    host: 'smtp.office365.com',
    port: 587,
    secureConnection: false,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: '******',
        pass: '******',
    },

};

let mailDetails = {
    from: '******',
    to: '******',
    subject: '******',
    text: '******'
};

//server connection
let smtp = mailer.createTransport(smtpConnectionSetting);

try{
    smtp.sendMail(mailDetails, function(err, res){
        if(err){
            console.log(err);
        }else{
            console.log('Message sent: ' + res.message);
        }
    });
}finally{
    smtp.close();
}