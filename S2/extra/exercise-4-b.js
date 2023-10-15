function findArrayIndex(array, text) {
    for (word of array) {
        if (word === text) {
            return array.indexOf(word);
        }
    }
    return "No se encontraron coincidencias";
}

function removeItem(array, text) {
    let i = findArrayIndex(array, text);
    if (i == "No se encontraron coincidencias") {
        return array;
    } else {
        array.splice(i, 1);
        return array;
    }
}


console.log(removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "Salamandra"));