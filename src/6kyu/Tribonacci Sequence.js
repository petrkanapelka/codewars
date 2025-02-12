// @ts-nocheck
//Tribonacci Sequence
function tribonacci(signature, n) {
    if (signature.length < n) {
        signature.push(signature.slice(-3).reduce((prev, curr) => prev + curr));
        tribonacci(signature, n);
    }
    return signature.slice(0,n);
}
let res = tribonacci([1, 2, 3], 0);
console.log('🚀 ~ res ➔', res);
// doTest([[1, 1, 1], 10], [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
// doTest([[0, 0, 1], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
// doTest([[0, 1, 1], 10], [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
// doTest([[1, 0, 0], 10], [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
// doTest([[0, 0, 0], 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
// doTest([[1, 2, 3], 10], [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
// doTest([[3, 2, 1], 10], [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
// doTest([[1, 1, 1], 1], [1]);

// doTest([[300, 200, 100], 0], []);
