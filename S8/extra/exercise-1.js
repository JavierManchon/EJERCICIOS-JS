const urlApi = "https://breakingbadapi.com/api/characters";

const getData = async () => {
    let response = await fetch(urlApi);
    let data = await response.json();
    return data;
}

const charactersMap = (charWannaMap) => {
    let charMapped = charWannaMap.map((char) => {
        return {
            charName: char.name,
            charImage: char.img
        };
    });
    return charMapped;
}

const drawCharacters = (charOnScreen) => {
    for(let char of charOnScreen) {
        let div$$ = document.createElement("div");
        let img$$ = document.createElement("img");
        img$$.setAttribute("src", char.charImage);
        let h2$$ = document.createElement("h2");
        h2$$.textContent = char.charName;
        div$$.appendChild(img$$);
        div$$.appendChild(h2$$);
        document.body.appendChild(div$$);
    }
}

const initFunction = async () => {
    let characters = await getData();

    let charactersMapped = charactersMap(characters);

    drawCharacters(charactersMapped);
}

initFunction();
//Salta un problema CORS que no me deja ver la API