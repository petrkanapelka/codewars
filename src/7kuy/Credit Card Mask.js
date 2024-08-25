// return masked string
function maskify(cc) {
    return cc.split('').map((c, i) => {
        return i < cc.length - 4 ? '#' : c;
    })
    .join('')
}

const res = maskify('11111');
console.log('🚀 ~ res ➔', res);

// const Test = require('@codewars/test-compat');

// describe("maskify", function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(maskify('4556364607935616'), '############5616');
//     Test.assertEquals(maskify('1'), '1');
//     Test.assertEquals(maskify('11111'), '#1111');
//   });
// });
