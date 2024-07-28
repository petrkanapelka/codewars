function createPhoneNumber(numbers) {
    let code = numbers.slice(0, 3).join('');
    let a = numbers.slice(3, 6).join('');
    let b = numbers.slice(6).join('');
    console.log(`(${code}) ${a}-${b}`);
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
// assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111');
// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
