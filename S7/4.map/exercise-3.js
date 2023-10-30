const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let visitCheck = (objs) => {
    let cityNames = objs.map(obj => obj.name);
    for (let i = 0; i < objs.length; i++) {
        if (objs[i].isVisited) {
            cityNames[i] += " (Visitado)";
        }
    } 
    return cityNames;
}

console.log(visitCheck(cities));

// mas optimo

let visitedCities = cities.map(city => city.isVisited ? city.name + " (visitado)" : city.name);