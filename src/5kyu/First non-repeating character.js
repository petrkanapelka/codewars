function firstNonRepeatingLetter(s) {
    let strArr = [...s.toLowerCase()];
    let arrIndx = [];
    strArr.forEach((char, indx) => {
        const sliceStrArr = [...strArr.slice(0, indx), ...strArr.slice(indx + 1)];
        if (!sliceStrArr.includes(char)) {
            arrIndx.push(indx);
        }
    });
    let indx = arrIndx[0];
    return s[indx] || '';
}

const res = firstNonRepeatingLetter('sTreSS');
console.log('🚀 ~ res ➔', res);
/* describe('Fixed tests', () => {
    describe('Basic tests', () => {
        doTest('a', 'a');
        doTest('stress', 't');
        doTest('moonmen', 'e');
    });
});
 */
