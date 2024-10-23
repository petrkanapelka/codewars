//Product of consecutive Fib numbers
function productFib(prod) {
    let fibArr = [0, 1, 1];
    let result = [];
    while (fibArr[fibArr.length - 1] < prod) {
        let last = fibArr[fibArr.length - 1];
        let prev = fibArr[fibArr.length - 2];
        let prevOfPrev = fibArr[fibArr.length - 3];
        fibArr.push(last + prev);
        if (last * prev === prod) {
            result.push(prev, last, true);
        } else if (last * prev > prod && prev * prevOfPrev < prod) {
            result.push(prev, last, false);
        }
    }
    return result;
}

// @ts-ignore
const res = productFib(84049690);
console.log('🚀 ~ res ➔', res);

/*
    assert.sameOrderedMembers(productFib(4895), [55, 89, true])
    assert.sameOrderedMembers(productFib(5895), [89, 144, false])
    assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true])
    assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false])
    assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true])
    assert.sameOrderedMembers(productFib(447577), [610, 987, false])
    assert.sameOrderedMembers(productFib(602070), [610, 987, true])
*/
