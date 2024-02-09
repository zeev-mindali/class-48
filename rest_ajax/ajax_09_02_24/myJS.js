let input = document.querySelector('input[type="text"]');
let button =document.querySelector('input[type="button"');
let h1 = document.querySelector('h1');
let res = document.querySelector('div');



button.addEventListener('click',()=>{
    console.log("in button pressed event")
    //func1(); //database
    document.dispatchEvent(new Event('event:database'));
    //func2(); //ajax

    //func3(); //response

});

// const func1=()=>{    
//     console.log("putting data inside database");
// }

// const func2=()=>{
//     console.log("send information with ajax");
// }

// const func3=()=>{
//     console.log("run when the process of ajax is finished");
// }