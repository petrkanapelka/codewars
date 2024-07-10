function solution(number) {
    if (number < 0) {
        return 0;
    }
    let arr = [0];
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i);
        }
    }

    const add = Array.from({ length: number }, (_, k) => +k);
    console.log('🚀 ~ solution ~ add ➔', add);

    console.log('🚀 ~ solution ~ arr ➔', arr);
    return arr.reduce((a, b) => a + b);
}

solution(16); //23

// function test(n, expected) {
//     it(`n=${n}`, () => {
//       let actual = solution(n)
//       assert.strictEqual(actual, expected)
//     })
//   }

//   describe("basic tests", function(){
//     test(10,23)
//   })
