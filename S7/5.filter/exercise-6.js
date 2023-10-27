const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let upperLegends = (objs) => {
    let unlovedPeople = objs.filter(obj => obj.gameMorePlayed.includes("Legends"));
    for (let i = 0; i < unlovedPeople.length; i++) {
        if (unlovedPeople[i].age > 35) {
            unlovedPeople[i].gameMorePlayed = unlovedPeople[i].gameMorePlayed.toUpperCase();
        }
    }
    return unlovedPeople;
}

console.log(upperLegends(streamers));