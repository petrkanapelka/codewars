function dashatize(num) {
  num = Math.abs(num);

  let arr = num.toString().split('');

  let result = arr
    .map((e, indx) => {
      if (+e % 2 !== 0) {
        if (indx === 0) {
          return e + '-';
        }
        if (indx === arr.length - 1) {
          return '-' + e;
        }
        return '-' + e + '-';
      }
      return e;
    })
    .join('');
  return result.replace(/--/g, '-').replace(/^-|-$/g, '');
}

dashatize(274);
console.log('🚀 ~ dashatize(568) ➔', dashatize(1));

// describe('Dashatize it', () => {
//   describe('Sample Tests', () => {
//     it('Basic', () => {
//       doTest(274, '2-7-4');
//       doTest(5311, '5-3-1-1');
//       doTest(86320, '86-3-20');
//       doTest(974302, '9-7-4-3-02');
//     });

//     it('Weird', () => {
//       doTest(0, '0');
//       doTest(-1, '1');
//       doTest(-28369, '28-3-6-9');
//     });
//   });
// });
