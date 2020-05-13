import mail = require("./mailSender");
import chart = require("./chart");

(async () => {

    let mailsender = new mail.MailSender;
    let chartImage = await chart.createChart()
    let mailDetail:{} = {
        from:"Enter e-mail"
        , to:"Enter e-mail"
        , subject:"test"
        , html:'Embedded image<br> <img src="cid:hogehoge">'
        , attachments: [{filename:"obake.png",path: chartImage, cid:"hogehoge"}]
    }
    
    mailsender.send(mailDetail);

})();
