var allCars = [];
//for injection the site......
var carSite = document.getElementById("carSite");

var myForm = `
    <form id="carForm">
        <h1>Car Info</h1><hr/>
        <input type="text" id="carNumber" placeholder="car number"/><br/><br/>
        <textArea id="carObject" placeholder="car object to insert" rows=5 cols=80></textArea><br/>
        <input type="button" value="get car information"/><br/>
        <br/><br/>
        <input type="text" placeholder="manufacturer" disabled/><br/><br/>
        <input type="text" placeholder="model" disabled/><br/><br/>
        <input type="text" placeholder="color" disabled/><br/><br/>
        <input type="text" placeholder="gasoline" disabled/><br/><br/>
        <input type="text" placeholder="year" disabled/><br/><br/>
        <input type="text" placeholder="nextTest" disabled/><br/><br/>
        <input type="number" placeholder="km"/><br/><br/>
        <input type="button" value="add car" id="addCar"/>
        <input type="reset" value="reset form"/>
    </form>
`;



//show site
carSite.innerHTML = myForm;

//add button event
document.getElementById("addCar").addEventListener("click",()=>{
    console.log(addCarData(document.getElementById("carNumber").value))
})

//      
const addCarData = (carNumber)=>{
    document.getElementById("carForm").reset();
    return `
        <tr>
            <td>${carNumber}</td>
            <td>manufacturer</td>
            <td>model</td>
            <td>color</td>
            <td>gasoline</td>
            <td>nextTest</td>
            <td>km</td>
        </tr>
    `;
}