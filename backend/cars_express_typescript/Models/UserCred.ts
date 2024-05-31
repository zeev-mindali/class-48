export class UserCred{
    public id:number;
    public userName:string;
    public userPass?:string; //will not pass in the jwt token
    public userRole:string;
    public userEmail:string;

    constructor(id:number,userName:string,userRole:string,userEmail:string,userPass?:string){
        this.id=id;
        this.userName=userName;
        this.userPass=userPass;
        this.userRole=userRole;
        this.userEmail=userEmail;
    }
}