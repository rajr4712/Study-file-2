
let boxes = document.getElementsByClassName("box");
console.log(boxes);
//look in console all box comes just click to HTMLColection(6).


//3rd box color will be red .(start at 0 index)
boxes[2].style.backgroundColor = "red";


//if particular box want to target - 
document.getElementById("purple").style.backgroundColor = "purple";


//Query selector - first box will be green .
document.querySelector(".box").style.backgroundColor = "green";

//by tag -
// document.getElementsByTagName("h2").style.color = "yellow";
//its not work due to getElementsByTagName returns a collection of elements, not a single element.


//do this by query selector if single h2  - 
document.querySelector("h2").style.color = "pink";

