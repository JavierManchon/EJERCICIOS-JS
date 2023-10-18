let newButton = document.createElement("button");
newButton.id = "btnToClick";
document.body.appendChild(newButton);

function textLogger() {
    console.log("Has clicado correctamente el boton");
}

document.getElementById("btnToClick").addEventListener("click", textLogger);

//importante en este caso quitar el parentesis
// porque si no se ejecuta directamente