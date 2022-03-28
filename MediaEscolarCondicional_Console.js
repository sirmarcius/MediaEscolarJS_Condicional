const prompt = require('prompt-sync')()

console.log('####################################')
console.log('####### Média do Aluno 2021! #######')
console.log('####################################')

console.log('\n')

let dados = true
while (dados = prompt('Deseja calcular a média do aluno? (s) para Sim (n) para Não: ')) {
  if (dados !== 's' && dados !== 'n') {
    console.log('\n' + 'Entrada Invalida!')
  }
  else if (dados === 's') {
    console.log('\n')
    let nome = prompt(`Qual o nome do aluno? `)
    let notaUm = parseFloat(prompt(`Qual a primeira nota? `))
    let notaDois = parseFloat(prompt(`Qual a segunda nota? `))
    let notaTres = parseFloat(prompt(`Qual a terceira nota? `))
    let notaQuatro = parseFloat(prompt(`Qual a quarta nota? `))
    let media = (notaUm + notaDois + notaTres + notaQuatro) / 4

    console.log(`\n` + `A média do aluno ${nome} é ${media}`)

    if (media >= 7){
      console.log(`\n` + `Aluno ${nome} aprovado!` + `\n`)
    }
    else {
      console.log(`\n` + `Aluno ${nome} reprovado!` + `\n`)
    }
  }
    else {
     console.log('\n##############################################\n### Obrigado por utilizar o nosso sistema! ###\n##############################################')
    break
  }
  
}

