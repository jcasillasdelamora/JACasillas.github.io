let biweekly = 0;
let weekOfYears = 52;
let annualBudget = 0;
let expenseType = null;
let expenseArray  = [];
let stringArray = [];
let totalExpenses = 0;
document.getElementById("weeklyButton").onclick = function (){
  document.getElementById("WB_results").innerHTML = "Weekly";
  biweekly = 1;
  console.log("pay is paid out weekly");
}

document.getElementById("biweeklyButton").onclick = function (){
  document.getElementById("WB_results").innerHTML = "Biweekly";
  biweekly = 2;
  console.log("pay is paid out biweekly");
}
document.getElementById("AnnualButton").onclick = function (){
  document.getElementById("WB_results").innerHTML = "Yearly";
  biweekly = 3;
  console.log("pay is paid out biweekly");
}




document.getElementById("submitDivButton").onclick = function (){
  let input = document.getElementById("paycheck").value;
  if(biweekly===2){
      annualBudget = input*(weekOfYears/2);
  }
  else if(biweekly===1){
    annualBudget = input * weekOfYears;
  }
  else if(biweekly===3){
    annualBudget = input;
  }
  else{
    alert("Please Choice Week or Biweekly Pay before precising")
  }
  let message = "$ "+ Math.round(annualBudget).toString();
  document.getElementById("outYBudget").innerHTML = message;
}
//Expense Type Options onClick Even listeners
document.getElementById("expAnnually").onclick = function (){
  expenseType = "annually";
  document.getElementById("expAnnually").style.backgroundColor= "grey";
  document.getElementById("expMonthly").style.backgroundColor= "white";
  document.getElementById("expWeekly").style.backgroundColor= "white";
  document.getElementById("expDaily").style.backgroundColor= "white";

}
document.getElementById("expMonthly").onclick = function (){
  expenseType = "monthly";
  document.getElementById("expAnnually").style.backgroundColor= "white";
  document.getElementById("expMonthly").style.backgroundColor= "grey";
  document.getElementById("expWeekly").style.backgroundColor= "white";
  document.getElementById("expDaily").style.backgroundColor= "white";
}
document.getElementById("expWeekly").onclick = function (){
  expenseType = "weekly";
  document.getElementById("expAnnually").style.backgroundColor= "white";
  document.getElementById("expMonthly").style.backgroundColor= "white";
  document.getElementById("expWeekly").style.backgroundColor= "grey";
  document.getElementById("expDaily").style.backgroundColor= "white";
}
document.getElementById("expDaily").onclick = function (){
  expenseType = "daily";
  document.getElementById("expAnnually").style.backgroundColor= "white";
  document.getElementById("expMonthly").style.backgroundColor= "white";
  document.getElementById("expWeekly").style.backgroundColor= "white";
  document.getElementById("expDaily").style.backgroundColor= "grey";
}
// Expense Summit button Even Listener
document.getElementById("expensesButton").onclick = function (){
  let type = document.getElementById("expenseName").value;
  let cost = document.getElementById("expenseCost").value;
  cost = parseInt(cost);

  if(expenseType==="annually"){annualCost=cost}
  if(expenseType==="monthly"){annualCost=cost*12}
  if(expenseType==="weekly"){annualCost=cost*52}
  if(expenseType==="daily") {annualCost = cost * 365;}
  totalExpenses += annualCost;
    let String = "- " + type + " -$ " + cost.toString() + " -" + expenseType + " -$" + annualCost.toString();
    expenseArray.push(annualCost);
    stringArray.push(String);

    console.log(String);

    //Create an element

    let table = document.getElementById("eTable_");
    let row = table.insertRow(-1);
    //
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    //
    c1.innerText = type;
    c2.innerText = "$ " + cost.toString();
    c3.innerText = expenseType;
    c4.innerText = "$ " + annualCost;


    let budgetRation = (annualBudget - totalExpenses) / annualBudget;
    let expenseRation = 1 - budgetRation;

    document.getElementById("e_budget").style.height = (budgetRation * 100).toString() + "%";
    document.getElementById("e_expenses").style.height = (expenseRation * 100).toString() + "%";

    document.getElementById("e_2").innerText = "$ "+totalExpenses.toString();
    document.getElementById("e_4").innerText = "$ "+(annualBudget - totalExpenses).toString();

  }
