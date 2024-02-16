class FullPerson{
    //fields
    private name:String;
    private age:number;
    private isMarried?:Boolean;
    
    //constructor
    constructor(name:String,age:number,isMarried?:boolean){
        this.name=name;
        this.age=age;
        this.isMarried=isMarried;
    }

    //getter
    public setName(name:String):void{
        this.name=name;
    }

    public setAge(age:number):void{
        this.age=age;
    }

    public setMarried(isMarried:boolean):void{
        this.isMarried=isMarried;
    }

    //getter
    public getName():String{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }

    public getMarried():boolean{
        return this.isMarried?true:false;
    }

    //methods
    public print():void{
        console.log(`name:${this.name} age:${this.age} isMarried:${this.isMarried?'yes':'no'}`)
    }
}

let empty = new FullPerson("",0);
empty.print();
empty.setName("zeev");
empty.setAge(50);
empty.setMarried(true);
empty.print();
console.log(empty.getName(),empty.getAge(),empty.getMarried());