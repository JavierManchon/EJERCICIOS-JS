const urlApi = "https://opentdb.com/api.php?amount=10&type=multiple";
const AmountOfQuestions = 10;
let input$$ = document.body.querySelector("input");

//Coge los datos de la API
const getData = async (url) => {
    try {
    let response = await fetch(url);
    let data = await response.json();
    return data;

    } catch(error) {
        console.error(error);
    }
}

//Coge la estructura del json y te devuelve tantas preguntas
//Como indique el input 
const questionSelector = (structure) => {
    let arrayOfQ = [];
    for (let i = 0; i < input$$.value; i++) {
        arrayOfQ.push(structure.results[i]);
    }
    return arrayOfQ;
}

//Pinta las preguntas dentro del gameBoard
const renderQuestion = (questions) => {
    let gameBoard$$ = document.body.querySelector('div[data-function="gameboard"]');

    //Reseteador
    gameBoard$$.innerHTML = "";

    //Pinta cada pregunta de manera individual
    for (let item of questions) {
        let questionArea = document.createElement("div");
        let questionText = document.createElement("h2");
        questionText.innerHTML = item.question;
        
        questionArea.appendChild(questionText);

        //Comprueba si es una pregunta de bool o multiple
        //para devolver en que posicion random se encuentra la pregunta correcta en la lista
        //Y la introduce 
        let questionsList = item.incorrect_answers;
        indexCorrect = 0;
        if (item.type === "multiple") {
            indexCorrect += Math.floor(Math.random() * 3);
        } else {
            indexCorrect += Math.floor(Math.random() * 1);
        }
        questionsList.splice(indexCorrect, 1, item.correct_answer);

        //crea la lista de respuestas
        ul$$ = document.createElement("ul");
        for (let entry of questionsList) {
            li$$ = document.createElement("li");
            li$$.innerHTML = entry;
            ul$$.appendChild(li$$);
        }

        questionArea.appendChild(ul$$);

        gameBoard$$.appendChild(questionArea);
    }
}

//Funcion que se ejecuta cuando pulsas startGame
const startGame = async () => {

    let trivialStructure = await getData(urlApi);

    let qSelection = questionSelector(trivialStructure);

    let renderedQuestions = renderQuestion(qSelection);

    return renderedQuestions;

    //TODO fucnionalidad de seleccion de respuestas
}

let startButton = document.querySelector('button[data-function="start-game"]');
startButton.addEventListener("click", startGame);