n = 5

let stringLine = ''


/*
PRIMEIRO EXERCICIO
for (let i = 0; i < n; i++) {
    stringLine += '*'    
}
for (let i = 0; i < n; i++) {
    console.log(stringLine)    
}



SEGUNDO EXERCICIO
for (let i = 0; i < n; i++) {
    stringLine += '*'    
    console.log(stringLine)
}
*/

let inverseIndex = n

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ( j < inverseIndex -1) {
            stringLine += ' '
        } else {
            stringLine += '*'
        }
    }
    console.log(stringLine)
    inverseIndex -= 1
    stringLine = ''
}

