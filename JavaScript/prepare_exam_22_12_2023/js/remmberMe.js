var myList = [];

const addEvent = ()=>{
    console.log("adding event");
    var newOccasion = new Object();
    newOccasion.occasionName = document.getElementById("occasionName").value;
    newOccasion.minPrice = document.getElementById("minPrice").value;
    newOccasion.maxPrice = document.getElementById("maxPrice").value;
    newOccasion.occasionType = document.getElementById("occasionType").value;
    newOccasion.imgUrl = document.getElementById("imgUrl").value;
    newOccasion.occasionDate = document.getElementById("occasionDate").value;

    // check if there is a logic in the data
    if (newOccasion.minPrice>newOccasion.maxPrice){
        alert ("minimum price is bigger then maximum price");
        return;
    }
    if (new Date(newOccasion.occasionDate)<new Date()){
        alert ("you can not add events in the past");
        return;
    }
    myList.push(newOccasion);
    
    //create table
    createTable();

    //reset form
    resetForm();
}

const resetForm = ()=>{
    document.getElementById("myForm").reset();
}

const createTable = ()=>{
    var myTable = "";
    for (var index=0;index<myList.length;index++){
        myTable += `
            <tr>
                <td>${myList[index].occasionName}</td>
                <td>${myList[index].minPrice}</td>
                <td>${myList[index].maxPrice}</td>
                <td>${myList[index].occasionType}</td>
                <td><img src="${myList[index].imgUrl}" width="100"/></td>
                <td>${myList[index].occasionDate}</td>
            </tr>
        `;
    }

    document.getElementById("myTable").innerHTML = myTable;
}