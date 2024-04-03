//Functions for Repetitive DOM operations
function getValueOfElement(idName) {
  return document.getElementById(idName).value;
}
// Set Element Values
function elementValueTo(idName,Value){
  document.getElementById(idName).value =Value;
}
// Set Inner Html for Elements
function elementSetInnerHtml(idName,Text){
  document.getElementById(idName).innerHTML = Text;
}
//Cost of Expense Per Year Method
function yearlyCost(frequency,cost){
  switch (frequency){
    case ("year"): return cost;
    case ("6months"): return cost * 2;
    case ("monthly"): return cost * 12;
    case ("biweekly"): return cost * 28;
    case ("week"): return cost * 52;
    case ("day"): return  cost * 365;
    case ("oneTime"): return cost;
    default: return cost;
  }
}
//Mistake Method
function correctReoccurrence(times){
  switch (times){
    case("year"):return "Yearly";
    case("6months"):return "Biannual";
    case("biweekly"):return "Biweekly";
    case("monthly"):return "Monthly";
    case("week"):return "Weekly";
    case("day"):return "Daily";
    case("oneTime"):return "One Time";
    default: return "unknown";
  }
}
// Method to Add to Final Expense Table
function finalTableFunction(expense,priority,reoccurrence,annual,monthly,weekly,weeklyBudget){
  let row  = document.getElementById("lastTable").insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);

  cell1.innerText=expense;
  cell2.innerText=priority;
  cell3.innerText=reoccurrence;
  cell4.innerText=annual;
  cell5.innerText=monthly;
  cell6.innerText=weekly;
  cell7.innerText=weeklyBudget;



}




//Quick String Formatting Method : Should have started with
function toCurrencyString(value)  {
  return "$ "+(Math.round(value)).toString();
}
function toPercentageString(value){
  return (Math.round(value)).toString()+" %";
}

//Global Variables
let startingBudget;
let budgetAfterExpenses;
let budgetAfterGoals;
let totalExpenses;

let budgetAfterGoalsLocal;
let nameOfGoal ;
let costOfGoal ;
let timeOfGoal ;
let monthlyTotal;
let totalCostOfGoals;



//Calculating Annual Budget
  //Finding the Pay Type
  let payType = "";
document.getElementById("weeklyButton").onclick = function()  {
  payType = "weekly"
  elementSetInnerHtml("payTypeText",payType);
}
document.getElementById("biweeklyButton").onclick = function()  {
  payType = "biweekly"
  elementSetInnerHtml("payTypeText",payType);
}
document.getElementById("yearlyButton").onclick = function()  {
  payType = "yearly"
  elementSetInnerHtml("payTypeText",payType);
}
  //onClick event for Enter Button
document.getElementById("enterBtnAnnualBudget").onclick = function (){
  let pay = getValueOfElement("income");
  switch (payType){
    case ("weekly"): startingBudget = pay * 52; break;
    case ("biweekly"): startingBudget = pay * 26; break;
    case ("yearly"): startingBudget = pay ; break;
    default: break;
  }
  budgetAfterExpenses =startingBudget;
  let budgetString = "$"+Math.round(startingBudget).toString();
  elementSetInnerHtml("showAnnualBudget",budgetString);
}
// Expense Input Event Listener
  document.getElementById("expenseEnter").onclick = function (){
    // Creating a row elements for eTable
     let row = document.getElementById("eTable").insertRow(-1);
     // Creating Individual Cells out the row object
    let c1 = row.insertCell(0);
    let c2 =row.insertCell(1);
    let c3 = row.insertCell(2);
    // Using Yearly Cost Method and Updating budgetAfterExpenses Variable
    let expenseFrequency = getValueOfElement("times");
    let cost = document.getElementById("expenseCost").value;
    let yearlyEx = yearlyCost(expenseFrequency,cost);
    //updating Budget After Expenses
      budgetAfterExpenses = budgetAfterExpenses -yearlyEx;

    let percentOfBudget = Math.round((yearlyEx/startingBudget)*100);
    c1.innerText = document.getElementById("expenseInputType").value;
    c2.innerText = "$ "+(yearlyEx.toString());
    c3.innerText = percentOfBudget.toString()+" %";
    //Updating the Html Expense Remainder List
    elementSetInnerHtml("startingBudget","$ "+startingBudget.toString());
    elementSetInnerHtml("budgetRemainder","$ "+budgetAfterExpenses.toString());
    elementSetInnerHtml("yearlyExpenses","$ "+(startingBudget-budgetAfterExpenses).toString());
    //Updating BarGraph
    let budgetPercentage = Math.round((budgetAfterExpenses/startingBudget)*100);
    document.getElementById("barGraph").style.height = ((budgetPercentage/100)*680).toString()+"px";
    document.getElementById("barGraphBlank").style.height = (((100-budgetPercentage)/100)*680).toString()+"px";
    // Updating Total Expense Break Down Table
    elementSetInnerHtml("yearCostCell","$ "+(Math.round(startingBudget-budgetAfterExpenses)).toString());
    elementSetInnerHtml("monthlyCostCell","$ "+(Math.round((startingBudget-budgetAfterExpenses)/12)).toString());
    elementSetInnerHtml("weeklyCostCell","$ "+(Math.round((startingBudget-budgetAfterExpenses)/52)).toString());
    // Optional: Passing afterExpenses value to monthly budget after expense input section
    elementValueTo("monthlyBudgetAfterExpenses",Math.round(budgetAfterExpenses/12));
    //Sneaking In Final Table Function
    finalTableFunction(getValueOfElement("expenseInputType"),"Essential",correctReoccurrence(expenseFrequency),toCurrencyString(yearlyEx),toCurrencyString(yearlyEx/120),toCurrencyString(yearlyEx/52),toCurrencyString(budgetAfterExpenses/52));

  }
// Entering Monthly Budget After Expenses Input
document.getElementById("monthlyBudgetAfterExpensesButton").onclick = function (){
  budgetAfterGoals = getValueOfElement("monthlyBudgetAfterExpenses")*12;
  // Adding Starting Budget, Budget After Expenses
  elementSetInnerHtml("startBudget",toCurrencyString(startingBudget)+"/year "+toCurrencyString(startingBudget/12)+"/month");
  elementSetInnerHtml("yearlyBudgetAfterExpenses",toCurrencyString(budgetAfterExpenses)+"/year "+toCurrencyString(budgetAfterExpenses/12)+"/month");




}
  // Budget Input Event Handel
document.getElementById("savingOrPayingOffSummitBtn").onclick = function (){
    let budgetAfterGoalsLocal = getValueOfElement("monthlyBudgetAfterExpenses");
     nameOfGoal = getValueOfElement("savingsOrPayingOff");
     costOfGoal = getValueOfElement("savingOrPayingOffCost");
     timeOfGoal = getValueOfElement("savingOrPayingOffTime");
     monthlyTotal = costOfGoal/timeOfGoal;
     percentageOfBudget = Math.round((monthlyTotal/budgetAfterGoalsLocal)*100);
    elementSetInnerHtml("savingOrPayingOffTotal",toCurrencyString(monthlyTotal)+" per Month" );
    elementSetInnerHtml("savingOrPayingOffPercentage", toPercentageString(percentageOfBudget)+" of Monthly Budget");

}

//budget Input Event Handler Storing Global
document.getElementById("addToMonthlyExpenses").onclick = function (){
    //budgetAfterGoals = getValueOfElement("monthlyBudgetAfterExpenses");
   // totalCostOfGoals = totalCostOfGoals + costOfGoal;
  budgetAfterGoals -= costOfGoal;
    elementSetInnerHtml("yearlyBudgetAfterGoals", toCurrencyString(budgetAfterGoals)+"/year "+toCurrencyString(budgetAfterGoals/12)+"/month");
    elementSetInnerHtml("weeklyBudgetRemainder",toCurrencyString(budgetAfterGoals/52)+"/ week");
    // Setting Up the table objects to be added by the dom
    let row = document.getElementById("savingsTable").insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    // adding cells via
    c1.innerText = nameOfGoal;
    c2.innerText = timeOfGoal.toString()+" month(s)";
    c3.innerText =  toCurrencyString (costOfGoal/timeOfGoal);
    let monthlyCostLocal = costOfGoal/timeOfGoal;

    finalTableFunction(nameOfGoal,"Non-Essential",timeOfGoal.toString()+" month(s)",toCurrencyString (costOfGoal),toCurrencyString(monthlyCostLocal),toCurrencyString((monthlyCostLocal*12)/52),toCurrencyString(budgetAfterGoals/52)); 

}

