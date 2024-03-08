export class CoinRate{
    public id:String;
    public symbol:String;
    public currencySymbol:String;
    public rateUsd:String;
    public type:String;

    constructor (id:String,symbol:String,currencySymbol:String,rateUsd:String,type:String){
        this.id=id;
        this.symbol=symbol;
        this.currencySymbol=currencySymbol;
        this.rateUsd=rateUsd;
        this.type=type;
    }
}