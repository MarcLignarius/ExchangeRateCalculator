const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  console.log('RAN');

  // Event listeners
  currencyOne.addEventListener('change', calculate);
  amountOne.addEventListener('input', calculate);
  currencyTwo.addEventListener('change', calculate);
  amountTwo.addEventListener('input', calculate);
}

calculate();
