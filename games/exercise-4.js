const imgXUrl = './public/exercise-4/x.png';
const imgChestUrl = './public/exercise-4/chest.png';
const imgSkullUrl = './public/exercise-4/skull.png';

const board$$ = document.body.querySelector("tbody");
const h1$$ = document.body.querySelector("h1");
let attempts = 0;

let columns = prompt("¿Cuantas columnas quieres?");
let rows = prompt("¿Cuantas filas quieres?");

const renderBoardGame = (columns, rows) => {
    for (let i = 0; i < rows; i++) {
        let row$$ = document.createElement("tr");
        board$$.appendChild(row$$);
        for (let j = 0; j < columns; j++) {
            let col$$ = document.createElement("td");
            row$$.appendChild(col$$);
            
            let img$$ = document.createElement("img");
            img$$.setAttribute("src", imgXUrl);
            col$$.appendChild(img$$);

            img$$.classList.add(`row${i}`);
            img$$.classList.add(`col${j}`);
        }
    }
}

const moneyGenerator = (columns, rows) => {
    let colPoint = Math.floor(Math.random()*columns);
    let rowPoint = Math.floor(Math.random()*rows);
    let point = [colPoint, rowPoint];

    return point
}

function cellChecker() {
    attempts++;
    h1$$.textContent = "Attempts: " + attempts;
    if (this.getAttribute("class") === `row${moneyPoint[0]} col${moneyPoint[1]}`) {
        setTimeout(function() {
            alert("Has ganado!");
        }, 500)
        this.setAttribute("src", imgChestUrl);
    } else {
        this.setAttribute("src", imgSkullUrl);
    }
}


const startGame = (columns, rows) => {

    renderBoardGame(columns, rows);
    
    let targets = board$$.querySelectorAll("img");
    for (let target of targets) {
        target.addEventListener("click", cellChecker);
    }
}

let moneyPoint = moneyGenerator(columns, rows);
startGame(columns, rows);