function largestNumIndex(numeros){
    let largestIndex = 0
    for (i in numeros){
        if (numeros[largestIndex] < numeros[i])
        largestIndex = i
    }
    console.log(largestIndex)
    return largestIndex
}

function smallerNumIndex(numeros){
    let largestIndex = 0
    for (i in numeros){
        if (numeros[largestIndex] > numeros[i])
        largestIndex = i
    }
    console.log(largestIndex)
    return largestIndex
}

largestNumIndex([2, 3, 6, 7, 10, 1]);
smallerNumIndex([2, 4, 6, 7, 10, 0, -3]);



function largestName (namesInput){
    let largestNameData = '';
    for(i in namesInput){
        if (namesInput.length > largestNameData.length){
            largestNameData = namesInput[i]
        }
    }
    console.log(largestNameData)
}

largestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])



