const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let shortMovie = [];
let averageMovie = [];
let longMovie = [];

for (let i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes >= 200) {
        longMovie.push(movies[i].name);
    } else if (movies[i].durationInMinutes >= 100) {
        averageMovie.push(movies[i].name);
    } else {
        shortMovie.push(movies[i].name);
    }
}

console.log(shortMovie);
console.log(averageMovie);
console.log(longMovie);