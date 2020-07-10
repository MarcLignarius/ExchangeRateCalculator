const currency_element_1 = document.getElementById('currency-one');
const currency_element_2 = document.getElementById('currency-two');
const amount_element_1 = document.getElementById('amount-one');
const amount_element_2 = document.getElementById('amount-two');
const rate_element = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currency_element_1.value;
  const currency_two = currency_element_2.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rate_element.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amount_element_2.value = (amount_element_1.value * rate).toFixed(2);
    });
}

// Event listeners
currency_element_1.addEventListener('change', calculate);
amount_element_1.addEventListener('input', calculate);
currency_element_2.addEventListener('change', calculate);
amount_element_2.addEventListener('input', calculate);

calculate();
