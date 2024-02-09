

const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=e873e6a2-66c1-494f-a677-f5e77348edb0&q=";

let stations;

$(()=>{
    //32.8482366,35.0625378,15z
    var map = L.map('map').setView([32.8482366, 35.0625378], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    $("#searchCity").on("click",()=>{
        let userSearch = $("#cityName").val();
        $.get(url+userSearch,(response)=>{
            console.log(response.result.records);
            
            let myData = response.result.records;
            for (let counter=0;counter<myData.length;counter++){
                //console.log(myData[counter]);
                if (myData[counter].CityName===userSearch){
                    L.marker([myData[counter].Lat , myData[counter].Long ])                    
                   
                    .addTo(map);
                   
                }
            }
                
             
            //going to do the magic :)
            
        })
    });
})
