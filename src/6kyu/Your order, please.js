// @ts-nocheck
//Your order, please
function order(words) {
    return words
        .split(' ')
        .map((el) => el.split('').map((el) => (Number.isNaN(Number(el)) ? el : Number(el))))
        .sort((a, b) => a.find((el) => typeof el === 'number') - b.find((el) => typeof el === 'number'))
        .map((el) => el.join(''))
        .join(' ');
}

const res = order('is2 Thi1s T4est 3a');
console.log('🚀 ~ res ➔', res);

/* assert.strictEqual(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
assert.strictEqual(order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople');
assert.strictEqual(order(''), '', 'empty input should return empty string'); */
