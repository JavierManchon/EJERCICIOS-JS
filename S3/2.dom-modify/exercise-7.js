let targetElems = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < targetElems.length; i++) {
    targetElems[i].remove();
}

//Por que con un while (targetElems.length > 0)
// si hago targetElems[0].remove() hace un bucle infinito.






