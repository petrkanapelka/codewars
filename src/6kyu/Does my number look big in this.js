// @ts-nocheck
//Does my number look big in this
function narcissistic(value) {
    return [...`${value}`].reduce((prev, curr) => prev + curr ** String(value).length, 0) === value;
}

let res = narcissistic(153);
console.log('🚀 ~ res ➔', res);

/* it('Narcissistic numbers', function () {
    dotest(7, true);
    dotest(153, true);
});

it('Not narcissistic numbers', function () {
    dotest(122, false);
    dotest(487, false);
}); */
