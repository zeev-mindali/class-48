class NewUser{
    //fileds, שדות
    private userName:String;
    private userPass:String;

    //constructor, בנאי
    constructor(userName:String, userPass:String){
        this.userName=userName;
        this.userPass=userPass;
    }
    //methods, פעולות
    public makeLogin():void{
        console.log("making login....")
    }

    private sayHelloYarden(msg:String):String{
        return `Yarden say: ${msg}`;
    }
    
    public makeAction(nodeId:number,epId:number,state:boolean){
        this.makeRealAction(nodeId,epId,state);
    }

    private makeRealAction(nodeId:number, epId:number, state:boolean){
        //bla bla bla bla
        //bla bla bla bla
        //bla bla bla bla
        //bla bla bla bla
        //bla bla bla bla
        //bla bla bla bla

    }
}

let ilan = new NewUser("ilan","12345");
