class Car{
    private lp:String;
    private manufacturer:String;
    private model:String;
    private color:String;
    private year:number;
    private engine:String | number;
    private speed:number;

    constructor(lp:String,manufacturer:String,model:String,color:String,year:number,engine:String|number){
        this.setLP=lp;
        this.setManufacturer=manufacturer;
        this.model=model;
        this.year=year;
        this.engine=engine;
        this.color=color;
        this.speed=0;
    }

    //setter / getters;
    public set setLP(lp:String){
        if (lp.length<10){
            console.log("WTF")
            this.lp="00-000-00";
        } else {
            this.lp=lp;
        }
    }

    public set setManufacturer(manufacturer:String){
        if (manufacturer.length<2){
            console.log("WTF");
            this.manufacturer="n/a";
        } else {
            this.manufacturer=manufacturer;
        }
    }

    public get getSpeed():number{
        return this.speed;
    }
    public speedUp(speed:number):void{
        for(let speedy=this.speed;speedy<=speed;speedy++){
            this.speed=speedy;
        }
    }
    public speedDown(speed:number):void{
        for (let speedy=this.speed;speedy>speed;speedy--){
            this.speed=speedy;
        }
    }

    public stopCar():void{
        this.speedDown(0);
    }

    public print():void{
        console.log('פרטי הרכב');
    }
}

let myCar = new Car("12-345-67","Mclaren","f1","Black",2019,"v12");
myCar.setLP="55-555-55";
