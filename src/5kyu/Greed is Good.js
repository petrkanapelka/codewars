function score(dice) {
    const counts = Array(7).fill(0);

    for (const num of dice) {
        counts[num]++;
    }
    console.log("🚀 ~ score ~ counts ➔", counts);
    const result = []
    for (let i = 1; i <= 6; i++) {
        const nums = dice.filter((num) => num === i)
        if (nums.length >= 3) {
            switch (i) {
                case 1: {
                    result.push(1000 + (nums.length - 3) * 100)
                }
                    break;
                case 5: {
                    result.push(i * 100 + (nums.length - 3) * 50)
                }
                    break;
                default: {
                    result.push(i * 100)
                }
            }
        } else {
            switch (i) {
                case 1: {
                    result.push(nums.length * 100)
                }
                    break;
                case 5: {
                    result.push(nums.length * 50)
                }
                    break;
            }
        }
    }
    return result.reduce((prev, curr) => prev + curr, 0)
}

// const res = score([1, 1, 1, 3, 1])
const res = score([6, 6, 6, 3, 3])
console.log("🚀 ~ res ➔", res);


/*
it( "should value this as worthless", function() {
    assert.strictEqual( score( [2, 3, 4, 6, 2] ), 0, "Incorrect answer for dice = [2, 3, 4, 6, 2]" );
  })

  it( "should value this triplet correctly", function() {
    assert.strictEqual( score( [4, 4, 4, 3, 3] ), 400, "Incorrect answer for dice = [4, 4, 4, 3, 3]" );
  });

  it( "should value this mixed set correctly", function() {
    assert.strictEqual( score( [2, 4, 4, 5, 4] ), 450, "Incorrect answer for dice = [2, 4, 4, 5, 4]" );
*/

/*
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
*/