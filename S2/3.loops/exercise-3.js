const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

let notShow1 = 11;
let notShow2 = 40;

for (let i = 0; i < placesToTravel.length; i++) {
    let id = placesToTravel[i].id;
    if (id === notShow1 || id === notShow2) {
        placesToTravel.splice(i, 1);
    }
}

console.log(placesToTravel);