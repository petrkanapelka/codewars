// @ts-nocheck
function cakes(recipe, available) {
    let bakes = [];
    for (const key in recipe) {
        if (Object.prototype.hasOwnProperty.call(available, key)) {
            let quantity = Math.floor(available[key] / recipe[key]);
            bakes.push(quantity);
        } else {
            bakes.push(0);
        }
    }
    return bakes.sort((a, b) => a - b)[0];
}

let recipe = {
    flour: 500,
    sugar: 200,
    eggs: 1,
};
let available = {
    flour: 1200,
    sugar: 1200,
    eggs: 5,
    milk: 200,
};

const res = cakes(recipe, available);
console.log('🚀 ~ res ➔', res); //2

recipe = {
    apples: 3,
    flour: 300,
    sugar: 150,
    milk: 100,
    oil: 100,
};
available = {
    sugar: 500,
    flour: 2000,
    milk: 2000,
};

const res2 = cakes(recipe, available);
console.log('🚀 ~ res ➔', res2); //0
