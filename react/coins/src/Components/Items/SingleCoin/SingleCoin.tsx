import "./SingleCoin.css";

interface CoinProps {
  id: String;
  symbol: String;
  currencySymbol: String;
  rateUsd: String;
  type: String;
}

function SingleCoin(props: CoinProps): JSX.Element {
  return <div className="SingleCoin Box">
    <h2>{props.id}</h2><hr/>
    <div>{props.symbol}</div>
    <div>{props.currencySymbol}</div>
    <div>{props.rateUsd}</div>
    <div>{props.type}</div>
  </div>;
}

export default SingleCoin;
