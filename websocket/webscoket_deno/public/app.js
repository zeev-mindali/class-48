const myUsername = prompt("Please enter your name") || "Anonymous";
//please remmber to change the ip to your computer ip, or the server ip....
const socket = new WebSocket(
    `ws://192.168.60.22:3000/start_web_socket?username=${myUsername}`
);

socket.onmessage = (msg)=>{
    const data = JSON.parse(msg.data);

    switch(data.event){
        case "update-users":
            //refresh displayed user list
            let userListHTML="";
            for (const username of data.usernames){
                userListHTML += `<div>${username}</div>`;
            }
            document.getElementById("users").innerHTML = userListHTML;
            break;
        
        case "send-message":
            //display new chat message
            addMessage(data.username, data.message);
            break
    }
};

function addMessage(username, message){
    //displays new message
    document.getElementById(
        "conversation"
    ).innerHTML += `<b> ${username}</b>: ${message}<br/>`;
}

//on page load
window.onload = ()=>{
    //when clients hits the ENTER key
    document.getElementById("data").addEventListener("keypress", (e)=>{
        if (e.key==="Enter"){
            const inputElement = document.getElementById("data");
            var message = inputElement.value;
            inputElement.value = "";
            socket.send(
                JSON.stringify({
                    event: "send-message",
                    message: message,
                })
            );
        }
    });
}


//to run this demo
//install deno
//irm https://deno.land/install.ps1 | iex

//run demo
//deno run --allow-net server.js