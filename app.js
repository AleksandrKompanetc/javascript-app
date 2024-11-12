const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';

const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
// console.log(typeof sum);

plusBtn.onclick = function() {
  action = '+'
}

minusBtn.onclick = function() {
  action = '-'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  // if (actionSymbol == '+') {
  //   return num1 + num2
  // } else if (actionSymbol == '-') {
  //   return num1 - num2
  // }
  return actionSymbol == '+' ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function() {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)

  // if (action == '+') {
  //   const sum = Number(input1.value) + Number(input2.value);
  //   printResult(sum);
  // } else if (action == '-') {
  //   const sum = Number(input1.value) - Number(input2.value);
  //   printResult(sum);
  // }
}

/* Notate */

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = [{
  title: 'write blog about massive',
  competed: false
}, 
{
  title: 'theory of object',
  completed: false
}, 
{
  title: 'learn JS',
  completed: false
}];

function render() {
  for (let note of notes) {
  listElement.insertAdjacentHTML(
    'beforeend', 
    getNoteTemplate(note)
  )
}
}

render();

createBtn.onclick = function() {
  if (inputElement.value.length === 0) {
    return
  }
  const newNote = {
    title: inputElement.value,
    completed: false
  }
  listElement.insertAdjacentHTML(
        'beforeend', 
        getNoteTemplate(newNote)
      )
      inputElement.value = '';
}

function getNoteTemplate(note) {
  return `<li class="notateItem">
        <span>${note.title}</span>
        <span class="buttons">
          <span class="check">&check;</span>
          <span class="del">&times;</span>
        </span>
      </li>`
}