import { CoinRate } from "../../model/CoinRate";
import "./SingleCoin.css";

// interface CoinProps {
//   id: String;
//   symbol: String;
//   currencySymbol: String;
//   rateUsd: String;
//   type: String;
// }

function SingleCoin(props: CoinRate): JSX.Element {
  return (
    <div className="SingleCoin Box-wide">
      <span style={{color:"white",fontWeight:"bolder",marginRight:"30px"}}>{props.id}</span>  symbol: {props.symbol} currencySymbol {props.currencySymbol}{" "}
      <span style={{color:"red",marginLeft:"30px"}}> {props.rateUsd} </span>
    </div>
  );
}

export default SingleCoin;
