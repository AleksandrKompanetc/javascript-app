const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');

const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
// console.log(typeof sum);

submitBtn.onclick = function() {
  const sum = Number(input1.value) + Number(input2.value);
  resultElement.textContent = sum;
}