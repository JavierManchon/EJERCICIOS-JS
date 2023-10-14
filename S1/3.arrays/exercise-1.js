const cars = ["Saab", "Volvo", "BMW"];

let indexOfVolvo = cars.indexOf("Volvo");
if (indexOfVolvo === -1) {
    console.log("Not found");
} else {
    console.log(cars[indexOfVolvo]);
}