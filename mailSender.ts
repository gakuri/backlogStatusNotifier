import mailer = require("nodemailer");
import Mail = require("nodemailer/lib/mailer");
import smtpCredentials = require("./smtpCredentials.json")

export class MailSender{
    private connection:{};
    constructor(){
        this.connection = this.createConnection()
    }
    private createConnection():{}{
        let connection = {
            host: 'smtp.office365.com',
            port: 587,
            secureConnection: false,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: smtpCredentials.user,
                pass: smtpCredentials.pass,
            }
        }
        return connection;
    }
    public send(mailDetail:{}){
        console.log("server connection:start")
        let smtp = mailer.createTransport(this.connection);
        try {
            smtp.sendMail(mailDetail, function(err,res){
                if(err){
                    console.log(err)
                }else{
                    console.log("message sent: " + res.response)
                }
            })
        } finally{
            smtp.close();
            console.log("server connection:end")
        }
    }
}

