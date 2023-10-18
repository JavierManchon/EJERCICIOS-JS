const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
let x = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan == false) {
        if (x === fruits.length) {
            console.log("There are no more fruits");
        } else {
        foodSchedule[i].name = fruits[x];
        foodSchedule[i].isVegan = true;
        x++;
        }
    }
}
console.log(foodSchedule);