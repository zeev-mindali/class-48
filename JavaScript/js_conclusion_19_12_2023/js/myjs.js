const callAPI = ()=>{
   document.getElementById("res").innerText = "loading data from server...."
    //go to a web site and get some data for me :)

}

//set Timeout
//iife
var APIcalling = setTimeout(()=>{
    document.getElementById("res").innerText = "The server is not responding";
},5000);
var APIdata = setTimeout(()=>{
    document.getElementById("res").innerHTML = "We got the data .....";
    clearTimeout(APIcalling);
},2000)
callAPI();

