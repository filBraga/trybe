let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info.personagem)

info.recorrente = "Sim"

console.log(info)

for (let key in info){
    console.log(key)
}

for (let x in info){
    console.log(info[x])
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}


for (let x in info){
    if (info[x] != info2[x]){
        console.log(info[x] + " e " + info2[x])
    } else {
        console.log("Ambos " + x + "s")
    }
}