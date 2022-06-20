let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
let y = 0
let maior = 0
let menor = numbers[0]
let nImpares = 0

//1, 2 e 3
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
    sum += numbers[i]
    y = i
    if (numbers[i]<20){
        console.log("numero menor que vinte")
    } else {
        console.log("numero maior ou igual a vinte")
    }
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
    if (numbers[i] < menor) {
        menor = numbers[i]
    }
    if (numbers[i] % 2 != 0) {
        nImpares ++
    }

}
console.log("soma é " + sum)

let media = sum/(y+1)

console.log("media é " + media)

console.log("maior é " + maior)

console.log("menor é " + menor)

console.log("Numero de Impares é " + nImpares)
