// elementos da página

function funcaoChange(elemento) {
  console.log(elemento.value)
}

function load() {
  alert('Pagina carregada')
}

function botao() {
  // pega o elemento pelo ID e injeta o elemento no HTML
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigado por clicar</b>'
}

function redirecionar() {
  // abre numa aba nova
  // window.open('https://google.com')
  //abre na mesma aba
  window.location.href = 'https://google.com'
}

function trocar(elemento) {
  //nesse exemplo ele coleta a ID para fazer a mudança
  //document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse'
  //alert('trocar texto')
  //neste eu uso ele mesmo para alterar
  elemento.innerHTML = 'Obrigado por passar o mouse'
}

function voltar(elemento) {
  //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui'
  elemento.innerHTML = 'Passe o mouse aqui'
}
//funções

/* function validaIdade(idade) {
  var validar
  if (idade >= 18) {
    validar = true
  } else {
    validar = false
  }
  return validar
}

var idade = prompt('Qual sua idade?')
console.log(validaIdade(idade)) */

/* function soma(n1, n2) {
  return n1 + n2
}

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome)
}

alert(soma(5, 10))
alert(setReplace('Vai Japão', 'Japão', 'Brasil')) */

// terceira aula - Condicionais, laços de repetição e Date

/* var d = new Date()

//alert(d.getMonth() + 1) // para pegar o mês precisa sempre por +1 pois ele começa contando do 0 xD
alert(d.getMinutes())
alert(d.getDay())
alert(d.getHours()) */

// repetição
/* var count

for (count = 0; count <= 5; count++) {
  alert(count)
} */

/* var count = 0
while (count <= 5) {
  console.log(count)
  count++
} */

// condicional
/* var idade = prompt('Qual sua idade?') // gera um alerta que coleta informações e adicona na variável
if (idade >= 18) {
  alert('maior de idade')
} else {
  alert('menor de idade')
} */

// segunda aula array

// lista de dicionários
/* var frutas = [
  { nome: 'maça', cor: 'vermelha' },
  { nome: 'uva', cor: 'roxa' }
]
console.log(frutas)
alert(frutas[1].cor) */

//dicionário
/*var fruta = { nome: 'maça', cor: 'vermelha' }
console.log(fruta.nome)*/

/* var lista = ['maça', 'pêra', 'laranja']
lista.push('uva') // adicionar
lista.pop() // tirar
// console.log(lista.length) // tamanho da lista
// console.log(lista.reverse()) // mostra de forma reversa
console.log(lista.toString()) // imprime apenas as strings
console.log(lista.join(' - ')) // muda a virgula que fica no meio e troca por um traço */

//Primeira aula
/* var nome = 'Jackson Schiochet'
var idade = 27
var idade2 = 10
var n1 = 5
var n2 = 10
var frase = 'Japão é o melhor time do mundo'
// alert(nome + ' tem ' + idade + ' anos')
//alert(idade + idade2)
console.log(frase.replace('Japão', 'Brasil'))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(n1 * n2) */
