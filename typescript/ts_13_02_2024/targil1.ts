class Person{
    private userName:String;
    private userAge:number;
    readonly currentYear = 2024;

    constructor(userName:String, userAge:number){
        this.userName=userName;
        this.userAge=userAge;
    }

    // private makeMeYounger(){
    //     this.currentYear=2046;
    // }

    public makeCalc(){
        //this.makeMeYounger();
        return `${this.userName} was born in ${this.currentYear-this.userAge}`;
    }
}

let zeev = new Person("Zeev",50);
console.log(zeev.makeCalc());