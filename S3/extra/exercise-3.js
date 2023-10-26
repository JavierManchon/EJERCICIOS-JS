const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.body.querySelector("div[data-function='printHere'");

const ul$$ = document.createElement("ul");
for (let car of cars) {
    let li$$ = document.createElement("li");
    li$$.textContent = car;
    ul$$.appendChild(li$$);
}

div$$.appendChild(ul$$);