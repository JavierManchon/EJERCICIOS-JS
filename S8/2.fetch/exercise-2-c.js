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

function eraseP() {
    return this.parentNode.parentNode.removeChild(this.parentNode);
}

async function loggingData() {
    let input$$ = document.querySelector("input");
    let data = await getData(input$$.value);

    p$$ = document.createElement("p");
    p$$.textContent = "";
    let target = data.country;
    
    for (let i = 0; i < target.length; i++) {
        if (i === 0) {
            p$$.textContent += `El nombre ${input$$.value} tiene un ${target[i].probability * 100} de ser ${target[i].country_id}`;
        } else if (i !== 0 && i !== (target.length - 1)) {
            p$$.textContent += ` , un ${target[i].probability * 100} de ser ${target[i].country_id}`;
        } else {
            p$$.textContent += ` y un ${target[i].probability * 100} de ser ${target[i].country_id}`;
        }
    }

    document.body.appendChild(p$$);
    let eraser$$ = document.createElement("button");
    eraser$$.textContent = "X";
    p$$.appendChild(eraser$$);
    

    eraser$$.addEventListener("click", eraseP);
}