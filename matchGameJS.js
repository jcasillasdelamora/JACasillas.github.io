let regArray = ["cat","dog","hamster","canary","pig","horse","sheep","cow",
  "wolf","lion","bear","shark","ant","fly","wasp","spider"];
let startTime;
let endTime;
let difference = endTime-startTime;
var stack = [];
var attemptStadck = [];
var onOff = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]
var tries = 4;
var colorWheel = ["brown","orange","purple","blue","pink"];
var colorIndex = 0;
//deletes an element of a stack at a given index
function deleteStackText(text){
  let index = 0;
  for(let x = 0;x<attemptStadck.length;x++){if(attemptStadck[x]===(text)){index=x}}
  attemptStadck.splice(index,0);
}
// printsStack on console
function printConsoleStack(){
  for (let x =0; x<attemptStadck.length;x++){console.log(attemptStadck[x])}
}
//Function to Clear the last 4 elements of stack, the current selected will keep original stack but it will not keep the win status
function popLastFour(){
  attemptStadck.splice(0,4);
}

// checks for winner
let correct = function (){
  if(attemptStadck.includes("cat")&&attemptStadck.includes("dog")&&attemptStadck.includes("hamster")&&attemptStadck.includes("canary")){ return true}
  if(attemptStadck.includes("pig")&&attemptStadck.includes("horse")&&attemptStadck.includes("sheep")&&attemptStadck.includes("cow")){ return true}
  if(attemptStadck.includes("wolf")&&attemptStadck.includes("lion")&&attemptStadck.includes("bear")&&attemptStadck.includes("shark")){ return true}
  if(attemptStadck.includes("ant")&&attemptStadck.includes("fly")&&attemptStadck.includes("wasp")&&attemptStadck.includes("spider")){ return true}
  else {return false}
}
//return message on loss or win
function userMessage(){
  let message = "";
  if(attemptStadck.includes("cat")&&attemptStadck.includes("dog")&&attemptStadck.includes("hamster")&&attemptStadck.includes("canary")){ message="Correct, the category is house pets"}
  else if(attemptStadck.includes("pig")&&attemptStadck.includes("horse")&&attemptStadck.includes("sheep")&&attemptStadck.includes("cow")){message = "Correct, the category is farm animals"}
  else if(attemptStadck.includes("wolf")&&attemptStadck.includes("lion")&&attemptStadck.includes("bear")&&attemptStadck.includes("shark")){ message = "Correct, the category is wild animals"}
  else if(attemptStadck.includes("ant")&&attemptStadck.includes("fly")&&attemptStadck.includes("wasp")&&attemptStadck.includes("spider")){ message = "Correct, the category is insects"}
  else {message = "Sorry, try again"}
  return message;
}

//Rando Stack Generator
var randomStack = function (index){
  while(stack.length<16){
    let num =Math.round(Math.random()*15);
    if(!stack.includes(num)){stack.push(num);}
  }
  return stack[index];
}
//Start Button Event
document.getElementById("startBtn").onclick = function (){
  startTime = new Date();
  for(let x = 0; x<16; x++ ){
    document.getElementById(x.toString()).innerHTML = regArray[randomStack(x)];
  }
}

//Summit Button
document.getElementById("summitBtn").onclick = function () {
  console.log(correct(attemptStadck));
  console.log(userMessage());
  if(correct()){colorIndex++; document.getElementById("message1").innerHTML = userMessage();popLastFour();}
  else {document.getElementById("message1").innerHTML = userMessage()}
  if(colorIndex>=4){endTime = new Date(); console.log("Time dif is "+difference);
    document.getElementById("tableBorder").style.borderStyle = "Solid";
    document.getElementById("tableBorder").style.borderColor = "gold" ;

    document.getElementById("startBtn").innerHTML="You won!!!"}
}
// Method for Input Set up
function wordButton(id,index){
  item = document.getElementById(id).innerHTML.toString();
  if(onOff[index]) {document.getElementById(id).style.backgroundColor = colorWheel[colorIndex]; console.log("if statement"); onOff[index]=false; attemptStadck.push(item);tries++}
  else{document.getElementById(id).style.backgroundColor = "#08052b"; attemptStadck.pop(); onOff[index]=true; console.log("else statement");deleteStackText(item);tries-- }
  printConsoleStack();
  if(colorIndex>=4){document.getElementById(id).disabled = true; console.log("time dif is "+ startTime.getSeconds())}
}
//16 button set up
/*1*/document.getElementById("0").onclick = function (){ wordButton("0",0)};
/*2*/document.getElementById("1").onclick = function (){ wordButton("1",1)};
/*3*/document.getElementById("2").onclick = function (){ wordButton("2",2)};
/*4*/document.getElementById("3").onclick = function (){ wordButton("3",3)};
/*5*/document.getElementById("4").onclick = function (){ wordButton("4",4)};
/*6*/document.getElementById("5").onclick = function (){ wordButton("5",5)};
/*7*/document.getElementById("6").onclick = function (){ wordButton("6",6)};
/*8*/document.getElementById("7").onclick = function (){ wordButton("7",7)};
/*9*/document.getElementById("8").onclick = function (){ wordButton("8",8)};
/*10*/document.getElementById("9").onclick = function (){ wordButton("9",9)};
/*11*/document.getElementById("10").onclick = function (){ wordButton("10",10)};
/*12*/document.getElementById("11").onclick = function (){ wordButton("11",11)};
/*13*/document.getElementById("12").onclick = function (){ wordButton("12",12)};
/*14*/document.getElementById("13").onclick = function (){ wordButton("13",13)};
/*15*/document.getElementById("14").onclick = function (){ wordButton("14",14)};
/*16*/document.getElementById("15").onclick = function (){ wordButton("15",15)};
/*17*/document.getElementById("16").onclick = function (){ wordButton("16",16)};
