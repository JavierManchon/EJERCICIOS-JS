const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

    let ul$$ = document.createElement("ul");
    for (let country of countries) {
        let li$$ = document.createElement("li");
        let div$$ = document.createElement("div");
        let h4$$ = document.createElement("h4");
        h4$$.textContent = country.title;
        let img$$ = document.createElement("img");
        img$$.setAttribute("src", country.imgUrl);
        div$$.appendChild(h4$$);
        div$$.appendChild(img$$);
        li$$.appendChild(div$$);
        ul$$.appendChild(li$$);
    }
    document.body.appendChild(ul$$);

let button$$ = document.querySelector("button");
button$$.addEventListener("click", removeEntry);

function removeEntry() {
    ul$$ = document.querySelector("ul");
    lastDiv$$ = ul$$.lastChild;
    ul$$.hasChildNodes() ? ul$$.removeChild(lastDiv$$) : alert("No quedan elementos!");
}
