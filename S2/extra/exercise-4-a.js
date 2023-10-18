function findArrayIndex(array, text) {
    for (word of array) {
        if (word === text) {
            return "El index del array que coincide es: " + array.indexOf(word);
        }
    }
    return "No se encontraron coincidencias";
}

console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "ajolote"));
