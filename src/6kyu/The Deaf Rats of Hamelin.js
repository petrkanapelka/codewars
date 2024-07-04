var countDeafRats = function (town) {
  return town
    .split('P')
    .map((str, indx) =>
      str.match(/~O|O~/gi) === null
        ? []
        : str
            .match(/~O|O~/gi)
            .filter((el) => (indx === 0 ? el === 'O~' : el === '~O'))
    )
    .flat().length;
};

countDeafRats('O~O~O~O P');
countDeafRats('P O~ O~ ~O O~');
countDeafRats('~O~O~O~OP~O~OO~');
// it('ex1', function () {
//   Test.assertEquals(countDeafRats('~O~O~O~O P'), 0);
// });

// it('ex2', function () {
//   Test.assertEquals(countDeafRats('P O~ O~ ~O O~'), 1);
// });

// it('ex3', function () {
//   Test.assertEquals(countDeafRats('~O~O~O~OP~O~OO~'), 2);
// });
