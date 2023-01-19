let value = prompt('Digite um valor em metros')
let conversao = prompt('Escolha uma opção de conversão: \n1.mm \n2.cm \n3.dam \ndm \nkm')

let number = parseFloat(value)
let mm = (number * 1000)
let cm = (number * 100)
let dam = (number * 10)

switch ('conversao') {
        case '1' :
        alert(`O resultado é ${mm}`)
        break
        case '2' :
         alert(`O resultado é ${cm}`)
         break
        case '3' :
        alert(`O resultado é ${dam}`)
        break
        default :
        alert('A medida escolhida não existe')
}