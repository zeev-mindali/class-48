let dataOne = "";
document.addEventListener('event:one',(data)=>{
    console.log("one:\n",data);
    dataOne+=` 
    <tr>
        <td>${fixList(data.detail.candidates)}</td>
        <td>${data.detail.sumcandidates}</td>
        <td>${data.detail.city}</td>
        <td>${data.detail.district}</td>
    </tr>`;
});

document.addEventListener('event:finished',()=>{
    $("#dataOne").append(dataOne);
});