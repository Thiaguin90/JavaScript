const primeiroNome = prompt('Informe o seu primeiro nome:')
const sobrenome = prompt('Informe o seu sobrenome:')
const campoDeEstudo = prompt('Qual o seu campo de estudo?')
const anoDeNascimento = prompt('Qual o ano do seu nascimento?')

alert('Recruta cadastrado com sucesso!\n' +
'\nNome Completo:' + primeiroNome + sobrenome +
'\nCampo de estudo:' + campoDeEstudo +
'\nIdade:' + (2023 - anoDeNascimento))