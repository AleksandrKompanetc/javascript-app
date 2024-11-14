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

/* Theory */

const people = [
  {name: 'Alex', budget: 4200},
  {name: 'Lena', budget: 15100},
  {name: 'Igor', budget: 300},
  {name: 'Ksenya', budget: 7520},
]

// let findedPerson

// for (let person of people) {
//   if (person.budget === 7520) {
//     findedPerson = person
//   }
// }

// console.log(findedPerson)

// const findPerson = people.find(function(person) {
//   if (person.budget === 7520) {
//     return true
//   }
// })

// const finded = people.find((p) => p.budget === 7520)

// console.log(finded)

// const filtered = people.filter(function(p) {
//   return p.budget > 5000
// })

// console.log(people)

// const findedPerson = people.find(function(person) {
//   if (person.budget === 7520) {
//     return true
//   } 
// })

// console.log(findedPerson)

// const finded = people.find((p) => p.budget === 7520) 

// console.log(finded)

// const finded = people.findIndex(function(person) {
//   return person.budget === 7520
// })

// console.log(people.with(finded, 42))

// let sumBudget = 0
// const filtered = people.filter(function(p) {
//   return p.budget > 5000
// })
// filtered.forEach(function(p) {
//   sumBudget += p.budget
// })

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// const sumBudget = people
//   .filter(byBudget)
//   .map(pickBudget)
//   .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

// const string = 'Hello, how are you'
// const reversed = string
//   .split('')
//   .toReversed()
//   .join('!')
//   .split('')
//   .filter((c) => c !== '!')
//   .join('')

// console.log(reversed)

// const num = 42 //integer
// const float = 42.42 //float
// const pow = 10e3
// const big = 1_000_000
// const negative = -10

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) -1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(1 / 0)
// console.log(Number.isFinite(Infinity))
// const weird = 23 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(12))

const strInt = '42'
const strFloat = '42.42'

// console.log(Number(strInt))
// console.log(Number(strFloat))
// console.log(parseInt(strInt))
// console.log(parseInt(strFloat))
// console.log(+strInt, +strFloat)

const fixed = (0.1 + 0.2).toFixed(10)
console.log(parseFloat(fixed))

// BigInt

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n)
console.log(-42n)
// console.log(42.42n) // error