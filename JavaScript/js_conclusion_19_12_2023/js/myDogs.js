const dogURL = "http://random.dog/woof.json";
const duckURL = "https://random-d.uk/api/random";

var dogImg = document.getElementById("dogImg")
// setInterval(async () => {
//     const dogData = await fetch(dogURL);
//     const res = await dogData.json();
//     console.log(res.url);
//     document.getElementById("dogImg").src=res.url;
// }, 5000);


setInterval(() => {
    fetch(duckURL).then((jsonObject)=>{
        jsonObject.json().then((jsonData)=>{
            dogImg.src = jsonData.url;
        })
    })
}, 2000);