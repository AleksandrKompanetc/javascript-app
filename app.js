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

// const fixed = (0.1 + 0.2).toFixed(10)
// console.log(parseFloat(fixed))

// BigInt

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n)
// console.log(-42n)
// console.log(42.42n) // error
// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// Math

// console.log(Math.E)
// console.log(Math.PI)

// const myNum = 4.9
// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(2, 5, 42, 199, 0))
// console.log(Math.min(2, 5, 42, 199, 0))
// console.log(Math.floor(myNum))
// console.log(Math.ceil(4.1))
// console.log(Math.round(myNum))
// console.log(Math.trunc(myNum))
// console.log(Math.random())

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const num1 = getRandomNumber(10, 100)
// console.log(num1)

const firstName = 'Alex'
const age = 29

function getAge() {
  return age
}

// const old = 'Hello, my name is ' + name + ' and my age is ' + age
// const output = `Hello, my name is ${name} and my age is ${getAge() > 18 ? "Can drive" : 'Cant drive'}`
// console.log(output)

// console.log(firstName.length)     
// console.log(firstName.toUpperCase)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase)
// console.log(firstName.charAt(2))
// console.log(firstName.indexOf('a'))    
// console.log(firstName.toLowerCase().startsWith('Mrin'))  
// console.log(firstName.endsWith('ex!'))  
// console.log(firstName.repeat(22))
// const password = '     my super pass     '
// console.log(password.trim())
                                   
// Function declaration

// function greet(name) {
//   console.log('Hello -' + name)
// }

// Function Expression 

// const greet2 = function(name) {
//   console.log('2 Hello -' + name)
// }

// greet('Alex')
// greet2('Alex')

// console.log(typeof greet)

// setTimeout(function() {
//   greet("Aleksandr")
// }, 1500)

// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// Arrow function

// function greet(name) {
//   console.log('Hello - ', name )
// }

// const arrow = (name, age) => {
//   console.log('Hello - ', name, age)
// }

// const arrow2 = (name) => {
//   console.log('Hello - ', name)
// }

// function pow(num, exp) {
//   return Math.pow(num, exp)
// }

// const pow2 = (num,exp) => Math.pow(num, exp)

// arrow('Alex', 11)

// console.log(pow2(2, 3))

// Default Parameter

// const summ = (a = 40, b = a / 2) => a + b
// console.log(summ(40, 2))
// console.log(sum())

// function sumAll(...numbers) {
//   let res = 0
//   for (let num of numbers) {
//     res += num
//   }
//   return res
//   return numbers.reduce((acc, cur) => acc += cur, 0)
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6))

// Closures

// function createPerson(name) {
//   return function (lastname) {
//     console.log(name + ' ' + lastname)
//   }
// }

// const addLastName = createPerson('Aleksandr')
// addLastName('Kompanets')
// addLastName('Sergeevich')
// addLastName('WebDeveloper')

// Date

// console.log(new Date())

// const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24 * 365)
// const date = new Date(2011, 0, 4, 12, 42, 12)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// now.setFullYear(2055)

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())






