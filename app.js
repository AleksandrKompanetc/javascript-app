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
  completed: true
}, 
{
  title: 'theory of object',
  completed: true
}, 
{
  title: 'learn JS',
  completed: false
}];

function render() {
  listElement.innerHTML = ''
  if (notes.length === 0) {
    listElement.innerHTML = '<p>No element!</p>'
  }
  for (let i = 0; i < notes.length; i++) {
  listElement.insertAdjacentHTML(
    'beforeend', 
    getNoteTemplate(notes[i], i)
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
  notes.push(newNote);
  render();
  inputElement.value = '';
}

listElement.onclick = function(event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    } else if (type === 'remove') {
      notes.splice(index, 1)
    }
    render()
  }
}

function getNoteTemplate(note, index) {
  return `<li class="notateItem">
        <span class="${note.completed ? 'line-through' : ''}">${note.title}</span>
        <span class="buttons">
          <span class="check ${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
          <span class="del" data-index="${index}" data-type="remove">&times;</span>
        </span>
      </li>`
}