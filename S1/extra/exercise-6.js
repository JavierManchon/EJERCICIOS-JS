const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let taget = 20;
for (let i = 0; i < products.length; i++) {
    if (products[i].sellCount < target) {
        badProducts.push(products[i].name);
    } else {
        goodProducts.push(products[i].name);
    }
}

console.log(goodProducts);
console.log(badProducts);