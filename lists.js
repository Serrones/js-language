console.log("Working with lists");

const salvador = "Salvador";

const saoPaulo = "São Paulo";

const rioDeJaneiro = "Rio de Janeiro";

// Create a list
const destinyList = new Array(
    salvador,
    saoPaulo,
    rioDeJaneiro
);

console.log(destinyList);

// Add element
destinyList.push('Curitiba');

console.log(destinyList);

// Remove element
destinyList.splice(1, 1);

console.log(destinyList);

// Print only one element
console.log(destinyList[1]);