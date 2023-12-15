//get all elements that tag name is input....
var elements = document.getElementsByTagName("input");

//itreate on elements, which is array
for (var index=0;index<elements.length;index++){
    //add event listener, and add the event to our arrow function
    //                                              callback
    elements[index].addEventListener("focusin",(elementEvent)=>{
    //the focusin event->element that triggered the evennt
    elementEvent.target.style.backgroundColor = "yellow";
    });
    elements[index].addEventListener("focusout",(elementEvent)=>{
        elementEvent.target.style.backgroundColor = "white";
    });
}