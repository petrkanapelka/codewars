function rot13(message) {
    const charsCode = []
    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i)
        console.log("🚀 ~ rot13 ~ charCode ➔", charCode);
        if (charCode >= 97 && charCode <= 122) {
            if (charCode + 13 <= 122) {
                charsCode.push(charCode + 13);
            } else {
                charsCode.push(charCode - 13);
            }
        } else if (charCode >= 65 && charCode <= 90) {
            if (charCode + 13 <= 90) {
                charsCode.push(charCode + 13);
            } else {
                charsCode.push(charCode - 13);
            }
        } else {
            charsCode.push(charCode)
        }
    }
    return String.fromCharCode(...charsCode)
}
const sym = Symbol('foo');
const sym2 = Symbol('foo');

const obj = {
    [sym]: 'sddasd',
    [sym2]: 'sddasd'
}

console.log("🚀 ~ obj ➔", obj);


// @ts-ignore
// const res = rot13('abcdefghijklmnopqrstuvwxyz') //nopqrstuvwxyzabcdefghijklm
const res = rot13('m') //nopqrstuvwxyzabcdefghijklm
console.log("🚀 ~ res ➔", res);

// describe("Tests", function () {
//     it("Sample tests", function () {
//         for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
//             assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
//         }
//     });
// });