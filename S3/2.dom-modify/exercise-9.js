let targetElems = document.querySelectorAll("div[class='fn-insert-here']");

for (let elem of targetElems) {
    let p$$ = document.createElement("p");
    p$$.textContent = "Voy dentro!";
    elem.appendChild(p$$);
}