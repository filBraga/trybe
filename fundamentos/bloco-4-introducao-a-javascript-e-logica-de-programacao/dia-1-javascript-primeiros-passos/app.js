// Variables
let a = 1;
let b = 2;
let c = 3;

// Positive ou negative
let positivoOuNeg = 0; 

//Triangle angles sum
let a1 = 90
let a2 = 45
let a3 = 45


//1

let Adição = a + b;
let Subtração = a - b;
let Multiplicação = a * b;
let Divisão = a / b;
let Módulo = a % b;

console.log("Adição de " + a + " + " + b + " = " + Adição);
console.log("Subtração de " + a + " - " + b + " = " + Subtração);
console.log("Multiplicação de " + a + " * " + b + " = " + Multiplicação);
console.log("Divisão de " + a + " / " + b + " = " + Divisão);
console.log("Módulo de " + a + " % " + b + " = " + Módulo);

//2

let maiorEntreDois = 0;

if (a > b) {
    maiorEntreDois = a;
} else {
    maiorEntreDois = b;
}

console.log("Maior entre " + a + " e " + b + " é " + maiorEntreDois);


//3

let arrayDeTrez = [a, b, c];
let maiorEntreTres = 0;

for(let x = 0; x < arrayDeTrez.length; x++) {
  if(arrayDeTrez[x] > maiorEntreTres){
    maiorEntreTres = arrayDeTrez[x];
  }
}

console.log("Maior na lista é " + arrayDeTrez + " é " + maiorEntreTres);

//4

if (positivoOuNeg > 0){
} else if ( positivoOuNeg < 0 ){
  console.log(positivoOuNeg + " é Positivo");
} else if ( positivoOuNeg < 0 ){
  console.log(positivoOuNeg+ " é Negativo");
} else {
  console.log(positivoOuNeg + " é Zero");
}

//5

if (a1 + a2 + a3 == 180){
  console.log("É um triangulo")
} else {
  console.log("Náo um triangulo")
}