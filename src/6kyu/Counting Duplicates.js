function duplicateCount(text) {
    text = text.toLowerCase();
    let repeatArr = [];
    text.split('').forEach((char) => {
        if (text.indexOf(char) !== text.lastIndexOf(char)) {
            repeatArr.push(char);
        }
    });

    console.log('🚀 ~ duplicateCount ~ repeatArr ➔', repeatArr);
    return new Set(repeatArr).size;
}

//...

let res = duplicateCount('aabbcde'); //, 2;
console.log('🚀 ~ res ➔', res);
let res2 = duplicateCount('aabBcde'); //, 2
console.log('🚀 ~ res2 ➔', res2);
let res3 = duplicateCount('Indivisibility'); //, 1
console.log('🚀 ~ res3 ➔', res3);
