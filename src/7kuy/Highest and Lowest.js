function highAndLow(numbers) {
    let res = numbers.split(' ');
    return [Math.max(...res), Math.min(...res)].join(' ');
}

// highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'); // return "5 1"
// highAndLow('1 2 3'); // return "5 -3"
highAndLow('1 9 3 4 -5'); // return "9 -5"
console.log("🚀 ~ highAndLow('42 45 46'); ➔", highAndLow('42 5 7 90 -1'));

// describe('Example tests', () => {
//     it('Test 1', () => {
//         assert.strictEqual(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
//     });
//     it('Test 2', () => {
//         assert.strictEqual(highAndLow('1 2 3'), '3 1');
//     });
// });
