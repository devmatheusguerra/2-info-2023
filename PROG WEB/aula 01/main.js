console.log("Ola Mundo!") // Exibe uma mensagem padrão
console.warn("Ola Mundo!") // Exibe uma mensagem de aviso
console.error("Ola Mundo!") // Exibe uma mensagem de erro

// Escopo das variáveis...

/**
 * LET: Váriaveis locais em funções e estruturas
 */

/**
 * Exemplo 1
 */
let x = 5 // x está em escopo global.
if(true){
    x = 10 // x não recebeu let ou const, por isso será reescrito o valor na variavel x global
    console.log("Dentro da estrutura de decisão: " + x) // x = 10
}

console.log("Fora da estrutura de decisão: " + x) // x = 10


/**
 * Exemplo 2
 */
let y = 5 // y está em escopo global.
if(true){
    let y = 10 // x recebeu let, por isso será criado um novo espaço de memoria
    console.log("Dentro da estrutura de decisão: " + y) // y = 10
}

console.log("Fora da estrutura de decisão: " + y) // y = 5


/**
 * CONST segue as mesmas regras do let, mas é um valor imutável. Logo não poderá ser alterado.
 */


if (5 == 4) {
    console.log('Primeira condicao')
} else if (3 == 2){
    console.log("Segunda condicao")
} else {
    console.log("Saida generica")
}


// Pesquisem sobre sobre a estrutura de decisao switch case em JavaScript.
for(let i = 0; i < 10; i+=2){
    console.log(i)
}


const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"] // Criando um array em JS. Equivalente as listas em python

for(let index in dias){ // O IN Pega os índices
    console.log(index)
}

for(let dia of dias){ // O OF Pega os valores
    console.log(dia)
}

// Criacao de um objeto em JS. Equivalente ao dicionario do python
const pessoa = {
    nome: "Matheus",
    sobrenome: "Guerra",
    idade: 25,
}

console.log(pessoa.nome) // Pode acessar atraves do .nome. Salvo quando houverem espaços
console.log(pessoa['nome']) // Pode acessar atraves do []