const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const calculatedTip = document.getElementById('calculatedTip');
const calculatedTotal = document.getElementById('calculatedTotal');

function calculateTotal(b, t) {
  let total = +b + +t;
  calculatedTotal.innerText = `Total: $ ${total.toFixed(2)}`;
}

function calculateTip(event) {
  event.preventDefault()
  const billValue = bill.value;
  const tipValue = tip.value;
  const tipTotal = billValue * tipValue;
  calculatedTip.innerText = `Tip: $ ${tipTotal.toFixed(2)}`;
  calculateTotal(billValue, tipTotal)
}

document.addEventListener('submit', calculateTip);
