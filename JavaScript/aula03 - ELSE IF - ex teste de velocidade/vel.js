let nameautoone = prompt('Qual o modelo do veículo?')
let velautoone = prompt('Qual a sua velocidade máxima?')
let nameautotwo = prompt('Qual o modelo do veículo?')
let velautotwo = prompt('Qual a sua velocidade máxima?')
let velone = parseInt(velautoone)
let veltwo = parseInt(velautotwo)

if (velone > veltwo) {
    alert(`O veículo modelo ${nameautoone} é mais rápido!
    `)  
}
else if (veltwo > velone) {
    alert(`O veículo modelo ${nameautotwo} é mais rápido!`)
    
}
else if (velone == veltwo) {
alert(`Os veículos tem a mesma velocidade`)
}
