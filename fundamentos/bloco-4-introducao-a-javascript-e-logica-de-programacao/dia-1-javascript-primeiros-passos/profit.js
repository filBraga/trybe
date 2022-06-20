let valorCusto = 5;
let valorVenda = 10;
let qnty = 1000;

let impostoSobreOCusto = 0.2 * valorCusto;

let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let lucroTotal = lucro * qnty;

console.log("Imposto Sobre O Custo  é "+ impostoSobreOCusto)
console.log("Valor Custo total é "+ valorCustoTotal)
console.log("Lucro é "+ lucro)
console.log("Lucro total é "+ lucroTotal)
