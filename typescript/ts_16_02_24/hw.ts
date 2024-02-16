// home work , page 38 targil 1
class Theatre{
    private name:String;
    private numOfSeat?:number;
    private openHour:number;
    private closeHour:number;

    readonly minimumNameLength=1;

    constructor (name:String,openHour:number,closeHour:number,numOfSeat?:number){
        this.setName=name;
        this.setSeat=numOfSeat!;
        this.setOpenHour=openHour;
        this.setCloseHour=closeHour;
    }

    public set setName(name:String){
        //this.name=name; //big no no
        if (name.length<this.minimumNameLength){
            console.log("you must enter a name");
            this.name="n/a";
            return;
        }
        this.name=name;
    }

    public set setSeat(seatNumber:number){
        //numOfSeat is optional, so we need to enter a value...
        if (seatNumber===undefined){
            this.numOfSeat=0;
            return;
        }

        if (seatNumber<0){
            console.log("you must enter a positive number");
            this.numOfSeat=0;
            return;
        }
        this.numOfSeat=seatNumber
    }

    public set setOpenHour(openHour:number){
        if (openHour<6 || openHour>12){
            console.log("open hour need to be between 6 and 12");
            this.openHour=0;
            return;
        }
        this.openHour=openHour;
    }

    public set setCloseHour(closeHour:number){
        if (closeHour<18 || closeHour>23){
            console.log("close hour need to be between 18 and 23");
            this.closeHour=0;
            return;
        }
        this.closeHour=closeHour;
    }

    public get getTheatreName():String{
        return this.name;
    }

    public get getOpenHour():number{
        return this.openHour;
    }

    public get getCloseHour():number{
        return this.closeHour;
    }

    public get getSeatNumber():number{
        return this.numOfSeat!;
    }

    public totalOpenHour():number{
        return this.closeHour-this.openHour;
    }

    public printInfo():String{
        return `name:${this.name} opened:${this.openHour} closed:${this.closeHour} seats:${this.numOfSeat}`;
    }
}

