const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

input$$ = document.body.querySelector("input[data-function='toFilterStreamers']");
input$$.addEventListener("input", consoleLogger)

function consoleLogger() {
    let includesChar = streamers.filter(streamer => streamer.name.includes(this.value));
    console.log(includesChar);
}
