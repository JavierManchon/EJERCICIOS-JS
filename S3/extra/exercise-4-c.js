const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
let txtButton = "Borra este elemento";
let ul$$ = document.createElement("ul");
for (let country of countries) {
    let li$$ = document.createElement("li");
    let div$$ = document.createElement("div");
    let h4$$ = document.createElement("h4");
    h4$$.textContent = country.title;
    let img$$ = document.createElement("img");
    img$$.setAttribute("src", country.imgUrl);
    let button$$ = document.createElement("button");
    button$$.textContent = txtButton;
    button$$.addEventListener("click", removeElement);
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    div$$.appendChild(button$$);
    li$$.appendChild(div$$);
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);

let button$$ = document.querySelector("button");
button$$.addEventListener("click", removeEntry);

function removeEntry() {
    uls$$ = document.querySelector("ul");
    lastDiv$$ = uls$$.lastChild;
    uls$$.hasChildNodes() ? uls$$.removeChild(lastDiv$$) : alert("No quedan elementos!");
}

function removeElement() {
    let liNode$$ = this.parentNode.parentNode;
    ul$$.removeChild(liNode$$);
}