// While é uma estrutura de repeticao que geralmente sera utilizada quando nao soubermos a quantidade de iteracoes

let numeros_escolhidos = []
let contador = 0
while (numeros_escolhidos.length < 15){
    let n = (parseInt(Math.random() * 25) % 1000) + 1; // Numeros aleatorios de 1 a 25
    if(numeros_escolhidos.indexOf(n) == -1){ // Verificando se o numero ja foi inserido no array
        numeros_escolhidos.push(n) // Adicionar um elemento a lista
    }
    contador++
}
numeros_escolhidos.sort((a,b) => a-b)
console.log(numeros_escolhidos)
console.log(contador)


// Funções e Callback
function soma(x, y, callback){
    let soma = x + y

    return callback(soma)
}


let user = [
    {
        nome: "Matheus",
        idade: 25
    },
    {
        nome: "Lucas",
        idade: 55
    },
    {
        nome: "Marcos",
        idade: 20
    },

    {
        nome: "Josue",
        idade: 205
    }

]

// Ordenacao atraves de uma funcao 
user.sort(function (a,b) {
    return a.idade - b.idade
})

console.table(user)



// Classe Math e String
console.log(Math.sqrt(64)) // Raiz quadrada
console.log(Math.PI) // PI
console.log(Math.pow(5, 2)) // Ponteciacao
// GRAUS => RADIANOS (graus * π/180)
console.log(Math.sin(45 * Math.PI / 180)) 
console.log(Math.cos(45 * Math.PI / 180))
console.log(Math.tan(45 * Math.PI / 180))
console.log(Math.round(5.4)) // 5
console.log(Math.round(5.5)) // 6
console.log(Math.round(5.6)) // 6
console.log(Math.ceil(5.1)) // 6
console.log(Math.floor(5.9)) // 5
console.log(Math.PI.toFixed(2)) // "3.14" => OBS.: SE TORNA UMA STRING
console.log(Math.abs(-10))
function cos(g){
    const graus = g * Math.PI / 180
    return Math.cos(graus)
}


