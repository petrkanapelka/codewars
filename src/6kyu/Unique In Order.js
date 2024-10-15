// @ts-nocheck
//Unique In Order
const uniqueInOrder = function (iterable) {
    return [...iterable].reduce((prev, curr, index) => {
        if (prev.lastIndexOf(curr) !== prev.length - 1 || index === 0) {
            prev.push(curr);
        }
        return prev;
    }, []);
};
let res = uniqueInOrder([1, 2, 2, 3, 3]);
console.log('🚀 ~ res ➔', res);
// uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'];
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D'];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];
