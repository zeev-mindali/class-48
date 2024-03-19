import { Devices } from "./devices";

export class Home{
    public id:number;
    public name:String;
    public devices:Devices[];

    constructor(id:number,name:String,devices:Devices[]){
        this.id=id;
        this.name=name;
        this.devices=devices
    }
}