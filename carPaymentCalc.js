
let n_months = 12;



//Summit Button Function
document.getElementById("summit").onclick = function (){
  principal = document.getElementById("cost").value;
  downPayment = document.getElementById("down").value;
  principal = principal-downPayment;
  stateTax = (document.getElementById("tax").value)/100;
  principal = principal+(principal*stateTax);

  r_interestRate = document.getElementById("rate").value;
  r_interestRate = r_interestRate/100;
  let r_monthlyInteresrRate = r_interestRate/n_months;
  t_timeYears = document.getElementById("years").value;
  let t_timeMonths = t_timeYears*n_months;



  let monthlyPayments = principal*((r_monthlyInteresrRate*((1+r_monthlyInteresrRate)**t_timeMonths))/(((1+r_monthlyInteresrRate)**t_timeMonths)-1));
  totalFutureCost = monthlyPayments*(t_timeMonths);












  console.log("principal is $"+principal);
  console.log("down payment is $"+downPayment);
  console.log("interest rate is "+r_interestRate+"%");
  console.log("term of loan "+t_timeYears+" years");
  console.log("state tax $"+ (stateTax/100));
  console.log("Monthly Payment is $"+monthlyPayments);
  console.log("Total Loan $"+totalFutureCost);





  document.getElementById("outTotal").innerText= "$ "+(Math.round(totalFutureCost));
  document.getElementById("outPrincipal").innerHTML ="$ "+ Math.round(principal);
  document.getElementById("outInterest").innerHTML ="$ "+ Math.round(totalFutureCost - principal);
  document.getElementById("outMonthly").innerHTML = "$ " +Math.round(monthlyPayments);



}

