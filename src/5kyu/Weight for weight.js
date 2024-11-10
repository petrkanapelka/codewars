function orderWeight(str) {
    return str
        .split(' ')
        .map((el) => {
            return {
                [el]: [...el].reduce((prev, curr) => {
                    return +prev + +curr;
                }, 0),
            };
        })
        .sort((a, b) => {
            const x = +Object.values(a);
            const y = +Object.values(b);
            if(x === y) {
                return Object.keys(a)[0].localeCompare(Object.keys(b)[0])
            }
            return x - y;
        })
        .map((el) => {
            return Object.keys(el)[0];
        })
        .join(' ');
}

const res = orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123');
console.log('🚀 ~ res ➔', res);

/*
 assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
 assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
*/
