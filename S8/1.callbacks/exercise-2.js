const userAnwsers = [];

function confirmExample(description){
    confirm(description);
}

function promptExample(description){
    prompt(description);
}

function father(description, callback){
    userAnwsers.push(callback(description));
}

// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');

father("soy un texto", confirmExample);
father("No soy un texto", promptExample);

console.log(userAnwsers);