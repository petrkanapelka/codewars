function XO(str) {
    return (
        [...str.toLowerCase().matchAll(/x/g)].length ===
        [...str.toLowerCase().matchAll(/o/g)].length
    );
    // const regexpOfX = /x/g;
    // const regexpOfO = /o/g;
    // let resX = [...str.toLowerCase().matchAll(regexpOfX)];
    // let resO = [...str.toLowerCase().matchAll(regexpOfO)];
    // console.log('🚀 ~ XO ~ res ➔', resX.length === resO.length);
}

XO('zpzpzpp');
// describe('Tests', () => {
//     it('test', () => {
//         Test.assertEquals(XO('xo'), true);
//         Test.assertEquals(XO('xxOo'), true);
//         Test.assertEquals(XO('xxxm'), false);
//         Test.assertEquals(XO('Oo'), false);
//         Test.assertEquals(XO('ooom'), false);
//     });
// });
const regexp = /(t)(e)(s)(t)(\d)/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
