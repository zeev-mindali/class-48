var allCars = [];
//for injection the site......
var carSite = document.getElementById("carSite");
var carInfo = "";
var carEndPoint = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
// var mySite = `
//     <form id="carForm">
//         <h1>Car Info</h1><hr/>
//         <input type="text" id="carNumber" placeholder="car number"/><br/><br/>
//         <textArea id="carObject" placeholder="car object to insert" rows=5 cols=80></textArea><br/>
//         <input type="button" value="get car information" id="btnObject"/><br/>
//         <br/><br/>
//         <input type="text" placeholder="manufacturer" disabled/><br/><br/>
//         <input type="text" placeholder="model" disabled/><br/><br/>
//         <input type="text" placeholder="color" disabled/><br/><br/>
//         <input type="text" placeholder="gasoline" disabled/><br/><br/>
//         <input type="text" placeholder="year" disabled/><br/><br/>
//         <input type="text" placeholder="nextTest" disabled/><br/><br/>
//         <input type="number" placeholder="km"/><br/><br/>
//         <input type="button" value="add car" id="addCar"/>
//         <input type="reset" value="reset form"/>
//     </form>
//     <hr/>
//     <div id="carTable"></div>
// `;

var mySite = `
    <form id="carForm">
        <h1>Car Info</h1><hr/>
        <input type="text" id="carNumber" placeholder="car number"/>
        <input type="button" id="btnObject" value="get car info"/>
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
    <hr/>
    <div id="carTable"></div>
`;

//show site
carSite.innerHTML = mySite;

//add button event
document.getElementById("addCar").addEventListener("click",()=>{
    console.log(addCarData(document.getElementById("carNumber").value))
})

//add get car info from json object
// document.getElementById("btnObject").addEventListener("click",()=>{
//     var carInfo = JSON.parse(document.getElementById("carObject").value).result.records[0];    
//     //console.log(addCarData(carInfo));
//     allCars.push(carInfo);
//     createTable();
// })

document.getElementById("btnObject").addEventListener("click",async ()=>{
    //wait until we will get an answer for the api server
    carInfo = await getCarAPI(document.getElementById("carNumber").value);
    console.log(carInfo);
    updateFields(carInfo);
})

const updateFields = (myInfo)=>{
    //console.log(myInfo);
}

//tell the computer that we will using asynchronicity function
const getCarAPI= async(carNumber)=>{
    const response = await fetch(carEndPoint+carNumber);
    const res = await response.json();   
    return res.result.records[0];
}

//create table :)
const createTable = ()=>{
    var tableHeader = `
        <table>
            <tr>
                <th>car number</th>
                <th>manufacturer</th>
                <th>model</th>
                <th>color</th>
                <th>gasoline</th>
                <th>test</th>
                <th>km</th>
            </tr>
    `
    var tableBody = ()=>{
        var allrows = "";
        for (var index=0;index<allCars.length;index++){
            allrows+=addCarData(allCars[index]);
        }
        return allrows;
    }

    //var tableBody = allCars.forEach((item)=>addCarData(item));
    var tableFooter = '</table>'
    document.getElementById("carTable").innerHTML = tableHeader+tableBody()+tableFooter;
}

//get single car row in table
const addCarData = (carObject)=>{   
    document.getElementById("carForm").reset();
    return `
        <tr>
            <td>${carObject.mispar_rechev}</td>
            <td>${carObject.tozeret_nm}</td>
            <td>${carObject.kinuy_mishari}</td>
            <td>${carObject.tzeva_rechev}</td>
            <td>${carObject.sug_delek_nm}</td>
            <td>${niceDate(carObject.tokef_dt)}</td>
            <td>km</td>
        </tr>
    `;
}

const niceDate = (uglyDate)=>{
    //return uglyDate;
    //new date will be now an array, with size of - sign (+1)
    var newDate = uglyDate.split('-');
    return `${newDate[2]}-${newDate[1]}-${newDate[0]}`;
}