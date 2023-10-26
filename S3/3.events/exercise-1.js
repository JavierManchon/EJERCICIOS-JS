let newButton = document.createElement("button");
newButton.id = "btnToClick";
document.body.appendChild(newButton);

function textLogger(e) {
    console.log(e);
}

document.getElementById("btnToClick").addEventListener("click", textLogger);

//importante en este caso quitar el parentesis
// porque si no se ejecuta directamente