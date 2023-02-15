// Consultem a documentação em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/

//  Classe String
let nome = "João" // a declaração de uma String instancia um Objeto dessa Classe

console.log(nome.length) // Quantidade de Caracteres

// Acessando posições da minha String
console.log(nome[0]) // Através do index exatamente como nos Arrays
console.log(nome.charAt(2)) // charAt segue o padrão Camel Case (Caixa de Camelo), assim como a maioria dos metodos e funções em js.
console.log(nome.charCodeAt(0)) // Retorna o número de acordo com a tabela Unicode do caractere naquela posicao 



// Método endsWith()
// Retorna um booleano true se a string finalizar com o valor passado e false no caso contrário.
console.log(nome.endsWith('o'))
console.log(nome.endsWith('ao'))


// Método fromCharCode()
// Retorna o caractere da tabela unicode no valor passado
console.log(String.fromCharCode(112))

// Método indexOf()
// Busca a primeira ocorrência de uma determinada string ou caracter. Caso encontre retorna a posição da ocorrência. Do caso contrário, retorna -1
console.log(nome.indexOf("j")) // -1 (Não achou, pq js compara as strings levando em conta sua caixa - Case Sensitive) 
console.log(nome.indexOf("J")) // 0, porque o "J" é o primeiro caractere da variavel nome

// Repeat - Auto-explicativo
console.log(nome.repeat(5))

// Métodos replace() e replaceAll()
let text = "Eu tinha um sonho de trabalhar na Google e hoje eu trabalho na Google"

console.log(text.replace("Google", "FPT")) // replace() altera apenas a primeira ocorrencia

console.log(text.replaceAll("Google", "FPT")) // replaceAll() altera todas as ocorrencias


// Método split()
let tags = "JavaScript,Programação,Tutorial,Classe String"

// Separa a string em elementos de um array caso encontre ocorrencias. Senão, devolve um array com a propria string como elemento 
const tags_como_array = tags.split(',')
console.table(tags_como_array)

for(tag of tags_como_array){
    console.log(tag)
}


// Métodos toLowerCase() e toUpperCase()
console.log(nome)
console.log(nome.toLowerCase()) // Transforma o texto todo em minusculo
console.log(nome.toUpperCase()) // Transforma o texto todo em maiusculo


// Método slice()
console.log(text)
console.log(text.slice(3,8)) // Cria uma substring do texto de acordo com os parametros passados