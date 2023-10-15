const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let wavesCount = 0;
let rainCount = 0;
let firecampCount = 0;
let showerCount = 0;
let trainCount = 0;
let windCount = 0;

let soundsList = [];
let soundsCount = {};

for (let user of users) {
    let sounds = Object.keys(user.favoritesSounds);
    for (let sound of sounds) {
        if (!soundsList.includes(sound)) {
            soundsList.push(sound);
        }
    }
    for (let sound in user.favoritesSounds) {
        if (soundsCount[sound] == undefined) {
            soundsCount[sound] = 1;
        } else {
            soundsCount[sound]++;
        }
    }
}

console.log(soundsList);
console.log(soundsCount);