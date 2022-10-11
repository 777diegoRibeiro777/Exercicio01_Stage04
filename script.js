
alert(`Olá, insira dois números para que o programa realize os cálculos!!!`)

const numberOne = Number(prompt(`Digite o primeiro número:`))
const numberTwo = Number(prompt(`Digite o segundo número:`))

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restOfDivision = numberOne % numberTwo

alert(`O resultado dos cálculos foi:
- Soma: ${sum.toFixed(2)}
- Subtração: ${subtraction.toFixed(2)}
- Multiplicação: ${multiplication.toFixed(2)}
- Divisão: ${division.toFixed(2)}
- Resto da divisão: ${restOfDivision.toFixed(2)}
`)

if((sum % 2) == 0) {
  alert(`A soma dos dois números é par!!!`)
} else {
  alert(`A soma dos dois números é impar T_T.`)
}

if(numberOne == numberTwo) {
  alert(`Os dois números inseridos são iguais!!!`)
} else {
  alert(`Os dois números infelizmente não são iguais T_T.`)
}