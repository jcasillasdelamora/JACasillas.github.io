
let n_months = 12;
let monthlyPayments


//Summit Button Function
document.getElementById("summit").onclick = function (){
  // Original Principal
  principal = document.getElementById("cost").value;
  let carCost = principal;
  downPayment = document.getElementById("down").value;
  // After Tax
  stateTax = ((document.getElementById("tax").value)/100)+1;
  principal = principal*stateTax;
  let afterTax = principal;
  //After Down Payment
  principal = principal-downPayment;
  let afterDown = principal;


  r_interestRate = document.getElementById("rate").value;
  r_interestRate = r_interestRate/100;
  let r_monthlyInteresrRate = r_interestRate/n_months;
  t_timeYears = document.getElementById("years").value;
  let t_timeMonths = t_timeYears*n_months;



  monthlyPayments = principal*((r_monthlyInteresrRate*((1+r_monthlyInteresrRate)**t_timeMonths))/(((1+r_monthlyInteresrRate)**t_timeMonths)-1));
  totalFutureCost = monthlyPayments*(t_timeMonths);


  console.log("principal is $"+principal);
  console.log("down payment is $"+downPayment);
  console.log("interest rate is "+r_interestRate+"%");
  console.log("term of loan "+t_timeYears+" years");
  console.log("state tax $"+ (stateTax/100));
  console.log("Monthly Payment is $"+monthlyPayments);
  console.log("Total Loan $"+totalFutureCost);


  document.getElementById("outCost").innerText= "- $ "+(Math.round(carCost));
  document.getElementById("outAfterTax").innerHTML ="- $ "+ Math.round(afterTax);
  document.getElementById("outAfterDown").innerHTML ="- $ "+ Math.round(afterDown);
  document.getElementById("outInterest").innerHTML ="- $ "+ Math.round(totalFutureCost-principal);
  document.getElementById("outTotal").innerHTML ="- $ "+ Math.round(totalFutureCost);
  document.getElementById("outMonthly").innerHTML = "- $ " +Math.round(monthlyPayments);

}

document.getElementById("subButton").onclick = function (){
  let lastMessage ="";
  let myMonthlyIncome = document.getElementById("monthlyIncome").value;
  let percentage = document.getElementById("percentOfIncome").value;
  let idealCarPayment = Math.round(myMonthlyIncome*((percentage/100)));
  lastMessage = "Based on your $ "+myMonthlyIncome+" monthly income, the ideal car payment should be $"+
    idealCarPayment+" , given that the car payment is $"+ Math.round(monthlyPayments)+ " this means that "+canAfford(monthlyPayments,myMonthlyIncome);

  document.getElementById("response").innerHTML = lastMessage;

}

let canAfford = function (carPayment,monthlyIncome){
  let ny = monthlyIncome>=carPayment;
  if(ny){ return "you can afford this car"}
  else{return "you can not afford this car"}
}
