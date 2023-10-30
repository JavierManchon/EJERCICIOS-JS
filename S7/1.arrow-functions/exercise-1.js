let sumNum = (a = 10, b = 5) => {
    //No hay que poner return, porque console log realiza una accion pero no devuelve nada
    console.log(a + b);
}

sumNum();
sumNum(14);
sumNum(10, 10);