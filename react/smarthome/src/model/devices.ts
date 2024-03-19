import { Epid } from "./epid";

export class Devices{
    public id:number;
    public location:String;
    public name:String;
    public nodeId:number;
    public epid:Epid[];

    constructor(id:number,location:String,name:String,nodeId:number,epid:Epid[]){
        this.id=id;
        this.location=location;
        this.name=name;
        this.nodeId=nodeId;
        this.epid=epid;
    }
}