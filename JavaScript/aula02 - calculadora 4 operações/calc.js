let x = prompt('Digite um número')
let y = prompt('Digite outro número')

let numberOne = parseFloat(x)
let numberTwo = parseFloat(y)

let soma = numberOne + numberTwo
let subtracao = numberOne - numberTwo
let multi = numberOne * numberTwo
let divisao = numberOne / numberTwo

alert('Resultados:\n' +
'\nSome: ' + soma +
'\nSubtração: ' + subtracao +
'\nMultiplicação: ' + multi + 
'\nDivisão: ' + divisao)