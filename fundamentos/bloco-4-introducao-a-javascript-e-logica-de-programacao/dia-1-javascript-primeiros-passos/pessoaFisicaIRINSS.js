// Coloque o seu salário
let salario = 3000.00
let inss = 0
let ir = 0

if (salario > 5189.82){
    inss = 570.88
  }  else if (salario >= 2594.93 && salario <= 5189.82) {
    inss = salario * 0.11
  } else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = salario * 0.09
  } else if (salario <= 1556.94 && salario > 0) {
    inss = salario * 0.08
  } else {
    console.log("Salario tem que ser maio que zero")
  }

  let salarioSemInss = salario - inss
  console.log(salarioSemInss)

  if (salarioSemInss > 4664.68){
    ir = salarioSemInss * 0.275 - 869.36
  }  else if (salarioSemInss >= 3751.06 && salarioSemInss <= 4664.68) {
    ir = salarioSemInss * 0.225 - 636.13
  } else if (salarioSemInss >= 2826.66 && salarioSemInss <= 3751.05) {
    ir = salarioSemInss * 0.15 - 354.80
  } else if (salarioSemInss >= 1903.99 && salarioSemInss <= 2826.65) {
    ir = salarioSemInss * 0.075 - 142.80
  }  else if (salarioSemInss <= 1903.98 && salarioSemInss > 0) {
    ir = 0
  } else {
    console.log("Salario tem que ser maio que zero")
  }

console.log(salario)
console.log(inss)
console.log(ir)
console.log (salario - inss - ir)