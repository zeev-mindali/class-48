class Car{
    private model:String;
    private price:number;

    private static totalCar:number=0;

    constructor(model:String, price:number){
        this.model=model;
        this.price=price;
        Car.totalCar++;
    }

    public static get getTotalCar():number{
        return Car.totalCar;
    }
}


let car1 = new Car("subaru",48000);
let car2 = new Car("Mercedes",259000);

console.log("total cars:",Car.getTotalCar);