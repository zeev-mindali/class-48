//an house with 32 curation
//each curation has an ip address, port, channel, name (curation1, curation2, ...)
let config = {
  name: "floor 1",
  ip: "192.168.1.206",
  port: 1001,
  ch1: true,
  ch2: true,
  ch3: false,
  ch4: false,
  ch5: false,
  ch6: false,
  ch7: false,
  ch8: false,
  ch9: false,
  ch10: true,
  ch11: false,
  ch12: false,
  ch13: false,
  ch14: false,
  ch15: false,
  ch16: false,
  reverse: false,
  totalCh: 16,
};
//16 object -> array -> name,ip,port,channel,reverse
//var myObj = {name:"curation1", ip:"192.168.1.206",port:1001,ch:1,rev:false}
var comfyArray = [];
//how to make it good
for (var counter = 1; counter <= config.totalCh; counter++) {
  if (config[`ch${counter}`]) {
    var Object = {
      name: `curtaion${counter}`,
      ch: counter,
      ip: "192.168.1.206",
      port: 1001,
      reverse: config.reverse,
    };
    comfyArray.push(Object);
  }
}

console.log(comfyArray);
// very very very very very very bad
// if (config.ch1){
//     var Object = {
//         name: "curtaion1",
//         ip: "192.168.1.206",
//         port: 1001,
//         reverse : config.reverse
//     }
// }

// if (config.ch2){
//     var Object = {
//         name: "curtaion2",
//         ip: "192.168.1.206",
//         port: 1001,
//         reverse : config.reverse
//     }
// }

// if (config.ch3){
//     var Object = {
//         name: "curtaion3",
//         ip: "192.168.1.206",
//         port: 1001,
//         reverse : config.reverse
//     }
// }
