export class UserCred{
    public userName:string;
    public userPass?:string; //will not pass in the jwt token
    public userRole:string;
    public userEmail:string;

    constructor(userName:string,userRole:string,userEmail:string,userPass?:string){
        this.userName=userName;
        this.userPass=userPass;
        this.userRole=userRole;
        this.userEmail=userEmail;
    }
}