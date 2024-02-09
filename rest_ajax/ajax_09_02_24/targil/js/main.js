const myURL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=ebcc8e6d-16df-43f9-97d6-a36f1912c9ed&limit=250";
$(() => {
  $("input[type='button']").on("click", () => {
    console.log("fetching data........");
    $.get(myURL, (response) => {
      console.log(response.result.records);
      let candidateArray = response.result.records;
      checkData(candidateArray);
    });
  });
});

/*
     <th>מועמדים</th>
     <th>כמות מועמדים</th>
     <th>עיר</th>
     <th>מחוז</th>

     
*/

const checkData=(data)=>{
    tableOther = "";        
    //O(n)
    for (let index=0;index<data.length;index++){
        //we still need to check something :)
        if (data[index].sumcandidates==1){
            //console.log("one candidate:\n",data[index])
            document.dispatchEvent(new CustomEvent('event:one',{detail: data[index]}));
        }
        else if (data[index].sumcandidates>=5){
            //console.log("many candidates",data[index])
            document.dispatchEvent(new CustomEvent('event:many',{detail:data[index]}));
        } else {
            tableOther += `
            <tr>
                <td>${fixList(data[index].candidates)}</td>
                <td>${data[index].sumcandidates}</td>
                <td>${data[index].city}</td>
                <td>${data[index].district}</td>
            </tr>`;
    
        }
    }
    document.dispatchEvent(new Event("event:finished"));
    $("#other").append(tableOther)
}

/*

איבראהים קאזם,1 גבר סלים,2 ג'בר עלאה אל דין,3 עבד אל רחמן אחסן,4 משלב ניהאד,5	*/
const fixList = (serverList)=>{
    let myList = serverList.replaceAll(',','\n');
    // let data="";
    // console.log(myList)
    // for (let index=1;index<myList.length;index++){
    //     data+=myList[index];
    // }
    return myList ;
}