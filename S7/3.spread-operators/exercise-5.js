const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

let colorsUpdate = [...colors];
colorsUpdate.splice(1,1);

//Si la copia tuviera que ser inline, es decir directamente la copia lo elimina

let colors2 = [...colors.slice(0,2), ...colors.slice(3)];