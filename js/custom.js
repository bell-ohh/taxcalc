const taxNumbers = {
  Ohio: 0.08,
  Georgia: 0.12,
  Florida: 0.11,
};

//Boiler plate code for submit
const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  console.log(dataObject);
  //above is boiler plate code
  userArray.push(dataObject);
  console.log(userArray);
  summary(dataObject);
}
function summary(userArray) {
  let salary = document.getElementById("salary");
  console.log("line22", userArray);
  salary.textContent = userArray.income;
  let region = document.getElementById("region");
  region.textContent = userArray.state;
  let taxAmount = document.getElementById("taxamount");
  let userState = userArray.state;
  let netPayAnnuallyDOM = document.getElementById("netpayannually");
  let taxOut = userArray.income * taxNumbers[userState];
  let netPayAnnually = userArray.income - taxOut;
  netPayAnnuallyDOM.textContent = netPayAnnually;
  taxamount.textContent = taxOut;
  console.log(userArray.income * taxNumbers[userState]);
  let netMonthlyPayDOM = document.getElementById("netpaymonthly");
  let netMonthlyPay = netPayAnnually / 12;
  netMonthlyPayDOM.textContent = netMonthlyPay;

}
