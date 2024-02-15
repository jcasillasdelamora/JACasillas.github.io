let biweekly = null;
let weekOfYears = 52;
let annualBudget = 0;
document.getElementById("weeklyButton").onclick = function (){
  document.getElementById("WB_results").innerHTML = "Weekly";
  biweekly = false;
  console.log("pay is paid out weekly");
}

document.getElementById("biweeklyButton").onclick = function (){
  document.getElementById("WB_results").innerHTML = "Biweekly";
  biweekly = true;
  console.log("pay is paid out biweekly");
}
document.getElementById("submitDivButton").onclick = function (){
  let input = document.getElementById("paycheck").value;
  if(biweekly){
      annualBudget = input*(weekOfYears/2);
  }
  else if(biweekly===false){
    annualBudget = input * weekOfYears;
  }
  else{
    alert("Please Choice Week or Biweekly Pay before precising")
  }
  let message = "$ "+ Math.round(annualBudget).toString();
  document.getElementById("outYBudget").innerHTML = message;
}
