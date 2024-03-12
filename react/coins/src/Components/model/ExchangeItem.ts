export class ExchangeItem{
    /*
      "id": "okex",
      "name": "Okex",
      "rank": "1",
      "percentTotalVolume": "21.379485735166293542000000000000000000",
      "volumeUsd": "616465445.1646260280799955",
      "tradingPairs": "22",
      "socket": false,
      "exchangeUrl": "https://www.okex.com/",
    */

    public id:String;
    public name:String;
    public rank:String;
    public percentTotalVolume:String;
    public volumeUsd:String;
    public tradingPairs:String;
    public exchangeUrl:String;

    constructor(id:String,name:String,rank:String,percentTotalVolume:String,
        volumeUsd:String, tradingPairs:String, exchangeUrl:String){
            this.id=id;
            this.name=name;
            this.rank=rank;
            this.percentTotalVolume=percentTotalVolume;
           
            this.volumeUsd=volumeUsd;
            this.tradingPairs=tradingPairs;
            this.exchangeUrl=exchangeUrl;
    }
}