import { calcSimpleInterest, simpleInterestAmt } from "./calc.js";

const SIform = document.querySelector("#simpleInterestForm");

function calculateInterest(e) {
  e.preventDefault();
  document.querySelector("#amountPara1").style.display = "block";

  let principalAmount = document.querySelector("#principalAmount").value;
  let years = document.querySelector("#years").value;
  let interestRate = document.querySelector("#interestRate").value;

  let amount = calcSimpleInterest(principalAmount, years, interestRate);
  let interest = simpleInterestAmt(amount, principalAmount);

  document.querySelector("#amountSpan1").textContent = amount;
  document.querySelector("#interestSpan1").textContent = interest;
}

SIform.addEventListener("submit", calculateInterest);
