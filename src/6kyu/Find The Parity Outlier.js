function findOutlier(integers) {
    const oddArr = integers.filter((num) => num % 2);
    const evenArr = integers.filter((num) => num % 2 === 0);
    return evenArr.length < oddArr.length ? evenArr[0] : oddArr[0];
}
let res = findOutlier([1, 1, 0, 1, 1]);
console.log('🚀 ~ res ➔', res);
// Test.assertEquals(findOutlier([0, 1, 2]), 1);
// Test.assertEquals(findOutlier([1, 2, 3]), 2);
// Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3);
// Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3);
// Test.assertEquals(findOutlier([1, 1, 0, 1, 1]), 0);
