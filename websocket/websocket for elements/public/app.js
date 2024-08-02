//please remmber to change the ip to your computer ip, or the server ip....
const socket = new WebSocket(
    `ws://192.168.60.22:3000/start_web_socket`
);

let btn1 = false;
let btn2 = false;

socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);

    switch (data.event) {
        case "button-color":
            
            break;
        case "checkbox":

            break;
        case "input-text":

            break;
    }
};

//on page load
window.onload = () => {
    //get current status from the server :)
}

const changeBtn1 = () => {
    btn1 = !btn1;
    document.getElementById("btn1").style.backgroundColor = btn1 ? "GREEN" : "LIGHTGREY";
    socket.send(
        JSON.stringify({
            event: "button-color",
            target: "btn1",
            message: btn1 ? "GREEN" : "LIGHTGREY",
        })
    );
}

const changeBtn2 = () => {
    btn2 = !btn2;
    document.getElementById("btn2").style.backgroundColor = btn2 ? "RED" : "LIGHTGREY";
    socket.send(
        JSON.stringify({
            event: "button-color",
            target: "btn2",
            message: btn1 ? "RED" : "LIGHTGREY",
        })
    );
}

const changeChkBox = () => {
    socket.send(
        JSON.stringify({
            event: "checkbox",
            target: "chkBox",
            message: document.getElementById("chkBox").checked,
        })
    );
}

const changeText = () => {
    socket.send(
        JSON.stringify({
            event: "input-text",
            target: "myTxt",
            message: document.getElementById("myTxt").value,
        })
    );
}
//to run this demo
//install deno
//irm https://deno.land/install.ps1 | iex

//run demo
//deno run --allow-net server.js