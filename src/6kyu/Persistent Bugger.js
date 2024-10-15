function persistence(num) {
    let count = 0;
    while (num >= 10) {
        count += 1
        num = [...num.toString()].reduce((prev, curr) => prev * curr);
    }
    return count;
}

let result = persistence(25);
console.log(result);
// assert.strictEqual(persistence(39), 3);
// assert.strictEqual(persistence(4), 0);
// assert.strictEqual(persistence(25), 2);
// assert.strictEqual(persistence(999), 4);
