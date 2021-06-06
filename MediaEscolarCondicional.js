console.log('####################################')
console.log('####### Média do Aluno 2021! #######')
console.log('####################################')

let dados = true
while (dados = prompt('\nDeseja calcular a média do aluno? (s) para Sim (n) para Não: ')) {
  if (dados !== 's' && dados !== 'n') {
    console.log('\nEntrada Invalida!')
  }
  else if (dados === 's') {
    let nome = prompt(`\nQual o nome do aluno? `)
    let n1 = parseFloat(prompt(`\nQual a primeira nota? `))
    let n2 = parseFloat(prompt(`Qual a segunda nota? `))
    let n3 = parseFloat(prompt(`Qual a terceira nota? `))
    let n4 = parseFloat(prompt(`Qual a quarta nota? `))
    let media = (n1 + n2 + n3 + n4) / 4

    console.log(`\nA média do aluno ${nome} é ${media}`)

    if (media >= 7){
      console.log(`\nAluno ${nome} aprovado!`)
    }
    else {
      console.log(`\nAluno ${nome} reprovado!`)
    }
  }
    else {
     console.log('\n##############################################\n### Obrigado por utilizar o nosso sistema! ###\n##############################################')
    break
  }
  
}

