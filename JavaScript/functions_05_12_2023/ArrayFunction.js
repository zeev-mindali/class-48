function turnOn(){
    console.log("light is on");
}

function turnOff(){
    console.log("light is off");
}

function lightCommand(state){
    console.log("Light is ",state?"On":"Off");
}

//zigbee,zwave,wifi

//Arrow Function

// var zwave= (state,nodeId)=>{
//     console.log(nodeId,">Zwave Light is ",state?"On":"Off");
// }

// var zigbee= (state,nodeId)=>{
//     console.log(nodeId,">Zigbee Light is ",state?"On":"Off");
// }

// var wifi= (state,nodeId)=>{
//     console.log(nodeId,">Wifi Light is ",state?"On":"Off");
// }

//in backtick we trust
var zwave= (state,nodeId)=>{
    console.log(`zwave>node id:${nodeId} is turned ${state?"On":"Off"}`);
}

var zigbee= (state,nodeId)=>{
    console.log(`zigbee>node id:${nodeId} is turned ${state?"On":"Off"}`);
}

var wifi= (state,nodeId)=>{
    console.log(`wifi>node id:${nodeId} is turned ${state?"On":"Off"}`);
}


lightCommand=zwave;
lightCommand(false,5);

wifi(true,3);