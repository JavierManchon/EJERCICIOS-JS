['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, index1, index2) {
    let firstSwap = array.splice(index1,1, array[index2]);
    array.splice(index1, 1, array[index2]);
    array.splice(index2, 1, firstSwap[0]);
    return array;
}

console.log(swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 3));