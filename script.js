const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clean = document.querySelector('.col2') //AC
const remove = document.querySelector('.delete') //DEL
const equal = document.querySelector('#calculate')
const prevResult = document.querySelector('.previousResult')
const actualResult = document.querySelector('.actualResult')

const lion = new Audio();
lion.src = "./sounds/LionRoar.mp3";

const catSound = new Audio();
catSound.src = "./sounds/Cat.mp3";

const meowSound = new Audio();
meowSound.src = "./sounds/Meow.mp3";

const monkeySound = new Audio();
monkeySound.src = "./sounds/Monkey1.mp3";

const elephantSound = new Audio();
elephantSound.src = "./sounds/Elephant.mp3";

const owlSound = new Audio();
owlSound.src = "./sounds/Owl.mp3";

const roosterSound = new Audio();
roosterSound.src = "./sounds/Rooster.mp3";

const hyenaSound = new Audio();
hyenaSound.src = "./sounds/hyena.mp3";

const dogSound = new Audio();
dogSound.src = "./sounds/Dog.mp3";

const sheepSound = new Audio();
sheepSound.src = "./sounds/Sheep.mp3";

const birdSound = new Audio();
birdSound.src = "./sounds/bird.mp3";

const cowSound = new Audio();
cowSound.src = "./sounds/Cow.mp3";



let actualAction = ''; //aktualneDzialanie
let previousAction = ''; // poprzednieDziałanie
let operation = undefined;

const calc = () => { // oblicz
    let action
    if (!previousAction || !actualAction) {
        return
    }
    const prev = parseFloat(previousAction)
    const actual = parseFloat(actualAction)

    if (isNaN(prev) || isNaN(actual)) {
        return
    }

    switch (operation) {
        case '+':
            action = prev + actual
            break;
        case '-':
            action = prev - actual
            break;
        case '×':
            action = prev * actual
            break;
        case '÷':
            if (actual === 0) {
                remove()
                return
            }
            action = prev / actual
            break;
        case '√':
            action = Math.pow(prev, 1 / actual)
            break;
        case '%':
            action = prev / 100 * actual
            break;
        case '^':
            action = Math.pow(prev, actual)
        case 'log':
            action = Math.log(prev) / Math.log(actual)
            break;
        default:
            return
    }

    actualAction = action
    operation = undefined
    previousAction = ''
}


const pickAction = (operator) => {
    if (actualAction === '') {
        return
    }

    if(previousAction !== ''){
        const prev = prevResult.innerText
        if(actualAction.toString() === '0' && prev[prev.lenght -1] === '÷'){
            clean()
            return
        }
        calc()
    }
 
    operation = operator
    previousAction = actualAction
    actualAction = ''
}

const updateResult = () => {
    actualResult.innerText = actualAction;
    if (operation != null) {
        prevResult.innerText = previousAction + operation;
    } else {
        prevResult.innerText = ''
    }
}

const addNumber = (num) => {
    if (num === '•') {
        if (actualAction.includes('.')) {
            return
        }
        num = '.'
    }
    actualAction = actualAction.toString() + num.toString()
}

const deleteNumber = () => {
    actualAction = actualAction.toString().slice(0, -1)
}
 const cleanResult = () => {
    actualAction = '';
    operation = undefined;
    previousAction = '';
 }
 
numbers.forEach((num) => {
    num.addEventListener('click', () => {
        addNumber(num.innerText)
        updateResult()
    })

});

remove.addEventListener('click', () => {
    deleteNumber()
    updateResult()
})

clean.addEventListener('click', () => {
    cleanResult()
    updateResult()
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        pickAction(operator.innerText)
        updateResult()
    })
});



equal.addEventListener('click', () => {
    calc()
    updateResult()

});

//veryfication//

function action (a,b) {
     return a + b;
  }

  // function action (a,b) {
  //   return a - b;
  // }



  module.exports = action
  


  

