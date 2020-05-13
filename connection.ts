export class office365 {
    private user: string;
    private pass: string;
    constructor(user:string,pass:string){
        this.user = user;
        this.pass = pass;
    }
    public setting() :{} {
        
        let connectionSetting = {
            host: 'smtp.office365.com',
            port: 587,
            secureConnection: false,
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: this.user,
                pass: this.pass,
            }
        }

        return connectionSetting;
        
    }

}
