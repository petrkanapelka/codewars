function dnaStrand(dna) {
    return dna
        .split('')
        .map((char) => {
            return char === 'A'
                ? 'T'
                : char === 'T'
                ? 'A'
                : char === 'G'
                ? 'C'
                : char === 'C'
                ? 'G'
                : char;
        })
        .join('');
}

const res = dnaStrand('GTAT');
console.log('🚀 ~ res ➔', res);

//   const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// if(typeof(dnaStrand) != "function") dnaStrand = DNAStrand

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")
//   })
// })
