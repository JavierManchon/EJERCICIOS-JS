const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement("ul");
for (let country of countries) {
    let li$$ = document.createElement("li");
    li$$.textContent = country;
    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);