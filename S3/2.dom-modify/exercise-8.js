let pElem = document.createElement("p");
pElem.textContent = "Voy en medio!";

let firstDiv = document.querySelector("div");
let secDiv = firstDiv.nextSibling;

document.body.insertBefore(pElem, secDiv);