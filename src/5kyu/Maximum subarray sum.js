var maxSequence = function (arr) {
    let maxSum = 0;
    let currentSum = 0;

    arr.reduce((prev, curr) => {
        currentSum = prev + curr;
        maxSum = Math.max(maxSum, currentSum);
        return currentSum > 0 ? currentSum : 0;
    }, 0);

    return maxSum;
};


const res = maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]);
console.log('🚀 ~ res ➔', res);
// should be 6: [4, -1, 2, 1]
