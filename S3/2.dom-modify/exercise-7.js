let targetElems = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < targetElems.length; i++) {
    targetElems[i].remove();
}

//Por que con un while (targetElems.length > 0)
// si hago targetElems[0].remove() hace un bucle infinito.

// La respuesta es que lo borro de la visibilidad del DOM
// Pero no lo estoy borrando realmente de la lista, por eso se rompe






