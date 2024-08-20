import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
    const apiURL = "http://localhost:8080/api/v1/transport/cars/";
    const [carNumber, setNumber] = useState("");
    const [result,setResult] = useState("Waiting for user input, nu gabriel, nuuuuuuuuuuuuuuuu");
    const handleSearch = async()=>{
        axios.get(apiURL+carNumber)
        .then(result=>result.data)
        .then(data=>{
            setResult(JSON.stringify(data));
        })
        .catch(err=>setResult(err));
    }

    return (
        <div className="App">
            <h1>Car Locater</h1>
            <h3>class 48 - the best that lecturer can get</h3>
            <h5>Shirly is better then gabriel</h5>
            <hr />
            <input type="number" placeholder='car number..' onChange={(e) => setNumber(e.target.value)} />
            <input type="button" value="Search" onClick={handleSearch}/>
            <hr/>
            <div>
                {result}
            </div>
    </div>
    );
}

export default App;
