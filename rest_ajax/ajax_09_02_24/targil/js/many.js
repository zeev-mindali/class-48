let dataMany = "";
document.addEventListener('event:many',(data)=>{
    //console.log(data);
    dataMany+=` 
    <tr>
        <td>${fixList(data.detail.candidates)}</td>
        <td>${data.detail.sumcandidates}</td>
        <td>${data.detail.city}</td>
        <td>${data.detail.district}</td>
    </tr>`;
});


document.addEventListener('event:finished',()=>{
    $("#dataMany").append(dataMany);
});