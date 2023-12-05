const calc = ()=>{
    var sum = Number(document.getElementById("sum").value);
    var myResponse = `Massar 10%: ${maasr(sum)}  Homash 20%:${homash(sum)}`
    document.getElementById("response").innerText = myResponse;
}

const maasr = (sum)=>{
    return sum*0.1;
}

const homash = (sum)=>{
    return sum*0.2;
}