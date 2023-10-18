let impElem = document.querySelector("input");

function textLogger() {
    console.log(impElem.value);
}

impElem.addEventListener("input", textLogger);