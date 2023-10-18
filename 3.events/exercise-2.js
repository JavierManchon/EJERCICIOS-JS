let impElem = document.querySelector("input");

function textLogger() {
    console.log(impElem.value);
}

impElem.addEventListener("focus", textLogger);

//No entiendo bien que hace focus.