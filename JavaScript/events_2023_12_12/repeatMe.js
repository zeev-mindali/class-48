const revMe = ()=>{
    const userText = document.getElementById("myText").value;
    var result="";
    for (var index=userText.length-1;index>=0;index--){
        result+=userText[index];
    }
    document.getElementById("revMe").innerText = result;
}

//iife =>will start without DOM
document.getElementById("myText").addEventListener("keyup",revMe);