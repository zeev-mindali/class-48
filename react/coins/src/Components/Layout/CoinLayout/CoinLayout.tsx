import { useEffect, useState } from "react";
import "./CoinLayout.css";
import axios from "axios";
import { CoinRate } from "../../model/CoinRate";
import SingleCoin from "../../Items/SingleCoin/SingleCoin";

function CoinLayout(): JSX.Element {
  //useState => will render the component again, once we will have a data....
  //const [variable name, set method name] = useState<varible type>(variable init)
  const [coins, setCoins] = useState<CoinRate[]>([]);
  //url of coins rate
  const COIN_RATE_URL = "http://api.coincap.io/v2/rates";

//   const getCoinRateData = async () => {
//     const result = await axios.get(COIN_RATE_URL);
//     console.log(result.data.data);
//     //setCoins(result.data.data);
//   };

  useEffect(() => {
    axios.get(COIN_RATE_URL).then((result) => {
      console.log(result.data.data);
      setCoins(result.data.data);
    });
  }, []);

  return <div className="CoinLayout">
    {coins.map(item=><SingleCoin id={item.id} symbol={item.symbol} currencySymbol={item.currencySymbol} 
        rateUsd={item.rateUsd} type={item.type}/>)}
  </div>;
}

export default CoinLayout;
