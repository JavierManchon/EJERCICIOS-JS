/*let impElem = document.querySelector("input");

function textLogger() {
    console.log(impElem.value);
}

impElem.addEventListener("focus", textLogger);

Esto funciona pero para esto conccretamente,
Hay que entender el evento como un codigo independiente
que siempre que se llame, se ejecute, sea para el elemento o nodo que sea
como en el caso de abajo
*/

//Hector lo hace así

let impElems = document.querySelectorAll("input");
//Hacemos un for ya que .querySelectorAll devuelve una lista,
//queremos añadir el event listener a todos los "input"
for (impElem of impElems) {
    impElem.addEventListener("focus", textLogger);
}

function textLogger(e) {
    // El .target es para indicar cual de todos es que estoy clicando
    let target$$ = e.target;
    console.log(target$$.value);
}

/* Otra forma incluso mejor es:

function textLogger(e) {
    console.log(this.value);
}

La gracia aqui es que no hace falta el parametro e,
podría estar vacio.
This toma como refencia el elemento directamente seleccionado,
no tienes que indicar dentro del elemnto cual quieres tomar como referencia como arriba del todo.
Esto lo hace más dinamico y reutilizable.
*/