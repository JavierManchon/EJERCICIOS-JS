const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let button$$ = document.body.querySelector("button[data-function='toShowFilterStreamers']");
button$$.addEventListener("click", consoleLogger)

function consoleLogger() {
    input$$ = document.body.querySelector("input[data-function='toFilterStreamers']");
    let includesChar = streamers.filter(streamer => streamer.name.includes(input$$.value));
    console.log(includesChar);
}