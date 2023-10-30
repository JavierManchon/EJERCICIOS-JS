const baseUrl = 'https://api.nationalize.io?name=';

const getData = async (info) => {
    try {let response = await fetch(baseUrl + info);
        let data = await response.json();
        return data;
    } catch(error) {
        console.error("No hemos podido hacer la peticion", error);
    }
}

let button$$ = document.querySelector("button");
button$$.addEventListener("click", loggingData);

async function loggingData() {
    let input$$ = document.querySelector("input");
    let data = await getData(input$$.value);
    console.log(data);
}

// No entiendo porque no se puede poner la ultima funcion como arrow function

