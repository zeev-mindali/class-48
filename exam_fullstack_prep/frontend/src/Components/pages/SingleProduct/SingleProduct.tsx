import { useEffect, useState } from "react";
import "./SingleProduct.css";
import axios from "axios";
export function SingleProduct(): JSX.Element {
    const [prod,setProd] = useState([]);
    const [prodId,setId] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:8080/api/products")
        .then (response => response.data)
        .then (data=>setProd(data));
    },[]);

    const displayItem = ()=>{
        const item:any = prod.filter(item=>item["id"]==prodId);
        return (
            <>
                <div className="Box" key={item["id"]}>
                    <h2>{item["name"]}</h2><br/><hr/>
                    {item["price"]}<br/>
                    {item["qty"]}<hr/>
                    {item["time"]}
                </div> 
            </>
        );
    }

    return (
        <div className="SingleProduct">
			<h1>Single Product</h1><hr/>
            <input type="number" placeholder="product id" onChange={(args)=>setId(+args.target.value)}/>
            <input type="button" value="search" onClick={displayItem}/>
        </div>
    );
}
