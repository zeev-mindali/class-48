import { useEffect, useState } from "react";
import "./CoinLayout.css";
import axios from "axios";
import { CoinRate } from "../../model/CoinRate";

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

  return <div className="CoinLayout">main coin layout</div>;
}

export default CoinLayout;
