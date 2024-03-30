//its select your first box 
document.querySelector(".box");

//get your html element or text of first box - 
console.log(document.querySelector(".box").innerHTML);

//container k under ki all html element will give with div -
console.log(document.querySelector(".container").innerHTML);

//text will give only wch is inside the div not a whole div with text-
console.log(document.querySelector(".container").innerText);


//get tag name -
console.log(document.querySelector(".container").tagName);
//output - DIV


//hide the element wch is inside the container from website- >
// console.log(document.querySelector(".container").hidden = true);


//change the htm element or text -
document.querySelector(".box").innerHTML = "hey i am harry"


//to check a any specific attribute present or not- 
console.log(document.querySelector(".box").hasAttribute("style"));
//output: true


//wch attribute is present give details - 
console.log(document.querySelector(".box").getAttribute("style"));
//output: color:red ;


//change the attribute text red color remove and attach border all side  - 
console.log(document.querySelector(".box").setAttribute("style", "border:2px solid blue"));


//remove attribute (remove border and text color - red)
document.querySelector(".box").removeAttribute("style");



//added a extra div by js code  - 
let div = document.createElement("div");                      //create a div
div.innerHTML = "i have been inserted by <b>js code </b>";     //insert text inside the div
div.setAttribute("class" , "created");                       //give a className that is - created 
document.querySelector(".container").append(div);            //added this div inside the container in last.



//another method to insert html element  - 
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "I am under the water plss help me <b>inserted by js code</b>");
//afterbegin - insert at end me , other property afterbegin 



//select all class of any div - 
console.log(document.querySelector(".box").classList);

//get className - 
console.log(document.querySelector(".container").className);


//add another class - 
console.log(document.querySelector(".container").classList.add("harry"));



