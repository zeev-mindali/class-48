class User{
    userName;
    userPass;

    adminName="admin";
    adminPass="12345";

    constructor(userName,userPass){
        this.userName=userName;
        this.userPass=userPass;
    }

    makeLogin(){
        if (this.userName==this.adminName && this.userPass==this.adminPass){
            console.log("Hello the one and only M A A T T T T T T T I");
        } else {
            console.log("Why who are you?");
        }
    }
}

let webUser = new User("matti","12345");
webUser.adminName="matti";
webUser.makeLogin();