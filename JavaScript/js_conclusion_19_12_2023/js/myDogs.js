const dogURL = "http://random.dog/woof.json";
var dogImg = document.getElementById("dogImg")
// setInterval(async () => {
//     const dogData = await fetch(dogURL);
//     const res = await dogData.json();
//     console.log(res.url);
//     document.getElementById("dogImg").src=res.url;
// }, 5000);


setInterval(() => {
    fetch(dogURL).then((jsonObject)=>{
        jsonObject.json().then((jsonData)=>{
            dogImg.src = jsonData.url;
        })
    })
}, 2000);