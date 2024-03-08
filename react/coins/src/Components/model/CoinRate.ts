export class CoinRate{
    public id:String;
    public symbol:String;
    public currencySymbol:String;
    public rateUsd:String;
    public type:String;
    // private static runNumber:number=0;
    // public itemNumber:number;

    constructor (id:String,symbol:String,currencySymbol:String,rateUsd:String,type:String){
        this.id=id;
        this.symbol=symbol;
        this.currencySymbol=currencySymbol;
        this.rateUsd=rateUsd;
        this.type=type;
        // CoinRate.runNumber++;
        // this.itemNumber=CoinRate.runNumber;
    }
}