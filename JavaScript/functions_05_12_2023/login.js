console.log("Here we start...");
// var uName = document.getElementById("uName").value;
// var uPass = document.getElementById("uPass").value;

const userName = "zeev";
const userPass = "123456";

// function checkLogin(){

// }

const checkLogin = ()=>{
    var uName = document.getElementById("uName").value;
    var uPass = document.getElementById("uPass").value;
    if (uName == userName && uPass == userPass){
        console.log("Hello my Master");
        document.getElementById("response").innerText="Hello my master";
        document.getElementById("response").style.color="GREEN";
    } else {
        console.log("Why who are you?");
        document.getElementById("response").innerText="Why who are you";
        document.getElementById("response").style.color="RED";
    }
}

