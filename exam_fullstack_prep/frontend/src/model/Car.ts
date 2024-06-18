export class Car{
    public baalut:String;
    public tozeret_nm:String;
    public kinuy_mishari:String;
    public sug_delek_nm:String;
    public mispar_rechev:number;

    constructor(baalut:String,tozeret_nm:String,kinuy_mishari:String,sug_delek_nm:String, mispar_rechev:number){
        this.baalut=baalut;
        this.tozeret_nm=tozeret_nm;
        this.kinuy_mishari=kinuy_mishari;
        this.sug_delek_nm=sug_delek_nm;
        this.mispar_rechev = mispar_rechev;
    }
}